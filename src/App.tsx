import { useState } from 'react';
import { ArrowPathIcon, ChevronDownIcon } from '@heroicons/react/16/solid';
import { PencilIcon } from '@heroicons/react/24/solid';
import { RadioGroup } from '@headlessui/react';
import {
  CustomInput,
  GlobalContextProvider,
  TokenSwitcher,
} from './components';
import {
  APP_VERSION,
  cx,
  getISODate,
  sanitizeCurrency,
  sanitizeInt,
} from './utils';
import { useGlobalContext } from './hooks';

function App() {
  const [isQuotaForm, setIsQuotaForm] = useState(false);
  const ctx = useGlobalContext();

  return (
    <div className="min-h-dvh bg-black/30">
      <header className="fixed top-0 left-0 w-full border-b border-white/20 z-[--z-header] backdrop-blur-md">
        <div className="max-w-[1920px] mx-auto ps-4 flex justify-between items-center">
          <h1 className="logo me-4">
            <span className="font-medium text-xl tracking-tighter">
              Q<span className="sr-only sm:not-sr-only">uotum</span>
            </span>
          </h1>
          <div className="text-sm">
            <div className="flex">
              <button
                type="button"
                onClick={() => setIsQuotaForm(true)}
                className="flex items-center p-2 gap-x-2 group border-s border-white/20"
              >
                <div className="grid gap-0.5 text-left grow">
                  <div className="text-xs opacity-90 mt-0.5">{`Quota (${ctx.token.symbol})`}</div>
                  <div className="">0.03&nbsp;ETH • 30&nbsp;days</div>
                </div>
                <div>
                  <PencilIcon height={12} className="" />
                </div>
              </button>
              <button
                type="button"
                className="flex items-center p-2 gap-x-2 group border-s border-white/20"
              >
                <div className="grid gap-0.5 text-left grow">
                  <div className="text-xs opacity-90 mt-0.5">Account</div>
                  <div className="">0xf32a...239d</div>
                </div>
                <div>
                  <ChevronDownIcon
                    height={16}
                    className="duration-200 group-hover:translate-y-[1px]"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="lg:min-h-[inherit] pt-24 pb-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_1fr] gap-x-4 gap-y-8 items-center max-w-7xl mx-auto px-4">
        <div className="lg:ps-12 text-center lg:text-left">
          <h2 className="text-[clamp(32px,5vw,72px)] leading-none font-bold max-lg:max-w-[10em] max-lg:mx-auto">
            A smart piggy bank for all your tokens
          </h2>
          <button type="button" className="btn btn-primary mt-6 px-8">
            Learn how it works
          </button>
        </div>
        <div className="">
          <div className="_card bg-white/[0.1] backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto [box-shadow:inset_0_1px_0_0_#ffffff0f]">
            {!isQuotaForm && <ExistingQuota />}
            {isQuotaForm && <NewQuota onCancel={() => setIsQuotaForm(false)} />}
            <div className="mt-8 -mb-4 text-center">
              <a href="#" className="">
                <span className="opacity-35">
                  <span className="font-medium tracking-tight">Quotum</span>
                  <span className="text-xs opacity-80 font-mono">
                    {` v${APP_VERSION}`}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ExistingQuota() {
  const [inputVal, setInputVal] = useState('');
  const [action, setAction] = useState('Deposit');

  const ctx = useGlobalContext();

  return (
    <div className="existing-quota">
      <div className="">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 justify-between mb-1">
          <h3>Available balance</h3>
          <TokenSwitcher />
        </div>
        <div className="overflow-x-auto overflow-y-hidden">
          <p className="text-4xl font-bold whitespace-nowrap">
            <span>{0.02816823}</span>
            <span className="text-2xl">{` ${ctx.token.symbol}`}</span>
          </p>
        </div>
        <div>
          <span>{`Total balance: ${0.12633}\u00A0${ctx.token.symbol}`}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 my-8">
        <span className="flex items-center text-sm">
          <ArrowPathIcon width="0.75rem" className="w-3 me-2 shrink-0" />
          <span>Quota renews on Jun 02, 2024</span>
        </span>
      </div>

      <div>
        <form
          className=""
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div>
            <RadioGroup
              value={action}
              onChange={setAction}
              className="flex flex-wrap justify-center gap-2"
              name="action"
            >
              <RadioGroup.Label className="sr-only">
                Choose action
              </RadioGroup.Label>

              {['Deposit', 'Withdraw'].map(action => (
                <RadioGroup.Option
                  key={action}
                  value={action}
                  className="btn btn-sm rounded-full ui-checked:btn-primary ui-not-checked:btn-ghost"
                >
                  {action}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>

          <div className="font-semibold text-4xl mt-4">
            <CustomInput
              className="py-4 justify-center [&_.custom-input-unit]:text-2xl"
              name="amount"
              value={inputVal}
              onChange={e => setInputVal(sanitizeCurrency(e.target.value))}
              placeholder="0"
              unit={ctx.token.symbol}
              pattern="^\d*(\.\d*)?$"
              inputMode="numeric"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block text-base mt-4"
          >
            {action}
          </button>
        </form>
      </div>
    </div>
  );
}

const ISODateToday = getISODate(new Date());

function NewQuota({ onCancel }: { onCancel: () => void }) {
  const [days, setDays] = useState('');
  const [quota, setQuota] = useState('');
  const [beginsOn, setBeginsOn] = useState(ISODateToday);

  const ctx = useGlobalContext();

  return (
    <div className="new-quota">
      <div className="flex items-center gap-2 mb-4 -mt-2 justify-between flex-wrap">
        <h3>New quota</h3>
        <TokenSwitcher />
      </div>
      <form action="" onSubmit={e => e.preventDefault()}>
        <div>
          <label className="block">
            <span className="text-sm block mb-2">Cycle</span>
            <div className="input input-ghost input-bordered bg-transparent">
              <CustomInput
                unit={days === '1' ? 'day' : 'days'}
                value={days}
                onChange={e => setDays(sanitizeInt(e.target.value))}
                className=""
                inputMode="numeric"
                placeholder="30"
                pattern="\d*"
                required
              />
            </div>
          </label>

          <label className="block mt-4">
            <span className="text-sm block mb-2">Quota per cycle</span>
            <div className="input input-ghost input-bordered bg-transparent">
              <CustomInput
                unit={ctx.token.symbol}
                value={quota}
                onChange={e => setQuota(sanitizeCurrency(e.target.value))}
                className=""
                inputMode="numeric"
                placeholder="0"
                pattern="\d*"
                required
              />
            </div>
          </label>

          <label className="block mt-4">
            <span className="text-sm block mb-2">Begins on</span>
            <div className="input input-ghost input-bordered bg-transparent flex items-center">
              <input
                type="date"
                name="begins-on"
                value={beginsOn}
                onChange={e => setBeginsOn(e.target.value)}
                min={ISODateToday}
                className={cx(
                  'w-full',
                  !beginsOn && '[&:not(:focus)]:opacity-[--placeholder-opacity]'
                )}
                required
              />
            </div>
          </label>

          <div className="mt-8 flex flex-wrap flex-row-reverse items-center gap-2">
            <button type="submit" className="btn btn-primary flex-1">
              Create Quota
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="btn btn-ghost grow flex-1"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  );
}
