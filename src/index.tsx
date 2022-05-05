import { FC } from 'react';

interface IProps {
  name: string;
}

export const ReactComponent: FC<IProps> = (props) => {
  const { name } = props;
  return <div className="font">The name prop value is {name}</div>;
};
