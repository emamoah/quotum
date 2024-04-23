import {
  InputHTMLAttributes,
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { cx } from '@/utils';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  unit: string;
}

export default forwardRef<HTMLInputElement, CustomInputProps>(
  function CustomInput({ unit, className, ...inputProps }, ref) {
    const [width, setWidth] = useState('0px');
    const innerInputRef = useRef<HTMLInputElement | null>(null);
    const hiddenSpanRef = useRef<HTMLSpanElement>(null);

    function syncWidth() {
      setWidth(window.getComputedStyle(hiddenSpanRef.current!).width);
    }

    useEffect(() => {
      window.addEventListener('load', syncWidth);
    }, []);

    useLayoutEffect(syncWidth, [inputProps.value, inputProps.placeholder]);

    return (
      <div
        className={cx(
          'relative flex items-baseline h-full overflow-hidden cursor-text',
          className
        )}
        onClick={() => {
          innerInputRef.current?.focus();
        }}
      >
        <span
          aria-hidden="true"
          ref={hiddenSpanRef}
          className="absolute inline-block text-transparent opacity-0 whitespace-nowrap z-[-1] h-full"
        >
          {inputProps.value || inputProps.placeholder}
        </span>
        <input
          className="min-w-0 h-full outline-none bg-transparent placeholder:text-current placeholder:opacity-[--placeholder-opacity]"
          style={{ width }}
          ref={value => {
            innerInputRef.current = value;
            typeof ref === 'function'
              ? ref(value)
              : ref
              ? (ref.current = value)
              : undefined;
          }}
          {...inputProps}
        />

        <span
          className={cx(
            'custom-input-unit shrink-0 whitespace-pre leading-none',
            !inputProps.value && 'opacity-[--placeholder-opacity]'
          )}
        >
          {` ${unit}`}
        </span>
      </div>
    );
  }
);
