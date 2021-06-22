import React from 'react';

type Props = {
	children?: React.ReactNode;
};

export const Content:React.FC<Props> = ({children}) => {
	return <div className="content-in">{children}</div>;
};
