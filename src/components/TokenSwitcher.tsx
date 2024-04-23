import { useGlobalContext } from '@/hooks';
import { APP_DATA } from '@/utils';
import { Dialog, Listbox, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/16/solid';
import { Fragment, useMemo, useState } from 'react';

export default function TokenSwitcher() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setQuery] = useState('');

  const ctx = useGlobalContext();

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const availableTokens = useMemo(
    () =>
      APP_DATA.tokens.filter(
        token =>
          // @ts-expect-error Index is valid
          token.addresses[String(ctx.chain.chainId)]
      ),
    [ctx.chain.chainId]
  );

  return (
    <>
      <button
        aria-label={`${ctx.token.name} – ${ctx.chain.name} network`}
        aria-haspopup="dialog"
        aria-expanded={isModalOpen ? 'true' : 'false'}
        type="button"
        onClick={openModal}
        className="btn btn-sm btn-ghost [&:not(:hover)]:bg-primary/10 rounded-full flex items-center gap-x-1 ps-1 pe-2"
      >
        <img
          src={`/images/tokens/${ctx.token.symbol}.png`}
          alt=""
          className="w-6 aspect-square rounded-full mr-1"
        />
        <span>{ctx.token.symbol}</span>
        <ChevronDownIcon width="1rem" className="w-4" />
      </button>

      <Transition show={isModalOpen} as={Fragment}>
        <Dialog
          static
          as="div"
          className="relative z-[--z-modal]"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 overflow-hidden bg-black/80 backdrop-blur-[8px]" />
          </Transition.Child>

          <div className="fixed inset-0 grid grid-cols-1 items-end sm:items-center">
            <Transition.Child
              as={Dialog.Panel}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
              className="_card bg-white/[0.1] backdrop-blur-sm rounded-2xl max-sm:rounded-b-none w-full sm:max-w-lg mx-auto [box-shadow:inset_0_1px_0_0_#ffffff0f] h-[80dvh] overflow-hidden"
            >
              <div className="grid grid-cols-1 grid-rows-[auto,1fr] h-full">
                <div className="flex items-center gap-2 p-2 border-b border-primary/10">
                  <form role="search" className="grow">
                    <label>
                      <span className="sr-only">Select token</span>
                      <div className="input input-ghost bg-transparent border-none outline-none flex items-center">
                        <MagnifyingGlassIcon
                          height="1.5em"
                          className="opacity-30 me-4"
                        />
                        <input
                          type="search"
                          name="query"
                          placeholder="Search token or paste address"
                          className="h-full w-full"
                          onChange={e => setQuery(e.target.value)}
                        />
                      </div>
                    </label>
                  </form>
                  <NetworkSelector />
                </div>

                <div className="relative overflow-y-auto">
                  <div className="absolute w-full overflow-hidden">
                    <div className="option">
                      <div className="native-token ui-active:bg-primary/10 ui-not-disabled:cursor-pointer">
                        <div className="px-5 pt-2 pb-3 ui-selected:opacity-30">
                          <div className="grid grid-cols-[auto,1fr] items-center gap-x-4">
                            <div>
                              <img
                                src={`/images/tokens/${ctx.chain.nativeToken.symbol}.png`}
                                alt=""
                                className="w-8 aspect-square rounded-full"
                              />
                            </div>
                            <div className="grid grid-cols-1">
                              <div className="flex items-center">
                                {ctx.chain.nativeToken.name}
                                {/* <span className="badge bg-primary/20 border-none">
                                      Native
                                    </span> */}
                              </div>
                              <div className="text-xs opacity-70">
                                {ctx.chain.nativeToken.symbol}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        role="separator"
                        className="px-5 py-2 opacity-60 mb-2 border-t border-primary/20"
                      >
                        Token contracts
                      </div>

                      {availableTokens.map(token => (
                        <div
                          key={
                            // @ts-expect-error Index is valid
                            token.addresses?.[String(ctx.chain.chainId)] ?? '0x'
                          }
                          className="ui-active:bg-primary/10 ui-not-disabled:cursor-pointer"
                        >
                          <div className="px-5 pt-2 pb-3 ui-selected:opacity-30">
                            <div className="grid grid-cols-[auto,1fr] items-center gap-x-4">
                              <div>
                                <img
                                  src={`/images/tokens/${token.symbol}.png`}
                                  alt=""
                                  className="w-8 aspect-square rounded-full"
                                />
                              </div>
                              <div className="grid grid-cols-1">
                                <div>{token.name}</div>
                                <div className="text-xs opacity-70">
                                  {token.symbol}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function NetworkSelector() {
  const ctx = useGlobalContext();

  return (
    <div className="relative">
      <Listbox value={ctx.chain} onChange={ctx.setChain}>
        <Listbox.Button className="btn btn-ghost hover:bg-primary/10 px-2 gap-x-1">
          <img
            src={`/images/chains/${ctx.chain.chainId}.png`}
            alt=""
            className="h-[60%] aspect-square rounded-full"
          />
          <ChevronDownIcon height="1.2em" className="-me-1" />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute right-0 rounded-sm">
            {APP_DATA.chains.map(chain => (
              <Listbox.Option
                key={chain.chainId}
                value={chain}
              ></Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
