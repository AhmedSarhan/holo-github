import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  gridCount: number;
}
const ListingSkeleton: FC<Props> = ({ gridCount }) => {
  return (
    <Skeleton
      inline
      count={10}
      height={250}
      wrapper={SkeletonWrapper}
      containerClassName={`listing-skeleton-container grid-cols-${gridCount}`}
    />
  );
};

export default ListingSkeleton;

function SkeletonWrapper({ children }: PropsWithChildren<unknown>) {
  return <SkeletonItem>{children}</SkeletonItem>;
}

const SkeletonItem = styled.li`
  width: 90%;
  margin-inline: auto;
`;
