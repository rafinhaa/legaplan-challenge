'use client';

import styles from './styles.module.scss';
import { FaCheck } from 'react-icons/fa6';

export type CheckboxProps = {
    checked: boolean;
    onChange: () => void;
}

export const Checkbox = ({
  checked,
  onChange,
}: CheckboxProps) => {

  const styleMapping = {
		default: styles.default,
		checked: styles.checked
	} [checked ? 'checked' : 'default'];

  return (
    <div
      onClick={onChange}
      className={styleMapping}
    >
      {checked && <FaCheck color="var(--color-blue)" />}
    </div>
  );
};