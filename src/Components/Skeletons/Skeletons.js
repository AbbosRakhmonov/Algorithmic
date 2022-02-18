import React from "react";
import Skeleton from "react-loading-skeleton";

export const HomeCardSkeleton = () => (
  <>
    <div className="col-md-4">
      <Skeleton width={"100%"} height={76} />
    </div>
    <div className="col-md-4">
      <Skeleton width={"100%"} height={76} />
    </div>
    <div className="col-md-4">
      <Skeleton width={"100%"} height={76} />
    </div>
  </>
);

export const HomeNewsCardSkeleton = () => (
  <>
    <li className={"list-group-item"}>
      <Skeleton height={210} width={"100%"} />
    </li>
    <li className={"list-group-item"}>
      <Skeleton height={210} width={"100%"} />
    </li>
    <li className={"list-group-item"}>
      <Skeleton height={210} width={"100%"} />
    </li>
    <li className={"list-group-item"}>
      <Skeleton height={210} width={"100%"} />
    </li>
  </>
);

export const HomeTopUsersSkeleton = () => (
  <>
    <div className={"reward-card"}>
      <Skeleton width={"100%"} height={80} />
    </div>
    <div className={"reward-card"}>
      <Skeleton width={"100%"} height={80} />
    </div>
    <div className={"reward-card"}>
      <Skeleton width={"100%"} height={80} />
    </div>
  </>
);

export const HomeCalendarSkeleton = () => (
  <>
    <Skeleton width={"100%"} height={311} />
  </>
);
