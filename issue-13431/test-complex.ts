import { USER_ASSIGNED } from "@/components/shared/userPreviews/userAssigned";
import type { ApolloContext } from "@/context";
import { getUuid } from "@helpers";
import type { Resolvers } from "@types";
import { B360OptimizationCostProfileTarget } from "@types";
import assert from "assert";
import * as Simulation from "../../../../../Simulation/Simulation.node";
import { SLIM_USER } from "../../../misc/SLIM_USER";

export const getProfileCost = async (
  prisma: ApolloContext["prisma"],
  clientId: string,
  target: B360OptimizationCostProfileTarget,
  size: number
) => {
  const profile = await prisma.analysisOptimizationCostProfiles.findFirst({
    where: {
      clientId: clientId,
      deleted: null,
      useFor360bFrontend: true,
      costProfileFor: target,
    },
    include: {
      datapoints: true,
    },
  });
  if (size < 0.0) {
    throw Error("Can not calculate optimization profile's cost for values lower than zero!");
  }
  // Default to standard cost profile if no profile can be found
  if (!profile) {
    const DEFAULT_SOLAR_PROFILE: Simulation.CostValuePair[] = [
      {
        cost: 10_000,
        value: 0,
      },
      {
        cost: 40_000,
        value: 25_000,
      },
      {
        cost: 80_000,
        value: 70_000,
      },
      {
        cost: 100_000,
        value: 110_000,
      },
    ];
    const DEFAULT_SES_PROFILE: Simulation.CostValuePair[] = [
      {
        cost: 0,
        value: 5_000,
      },
      {
        cost: 10_000,
        value: 15_000,
      },
      {
        cost: 30_000,
        value: 40_000,
      },
      {
        cost: 60_000,
        value: 60_000,
      },
    ];
    return (
      (await Simulation.calculateOptimizationProfileCost(
        target === B360OptimizationCostProfileTarget.Solar ? DEFAULT_SOLAR_PROFILE : DEFAULT_SES_PROFILE,
        size
      )) ?? 0
    );
  }
  const price = await Simulation.calculateOptimizationProfileCost(profile.datapoints, size);
  console.log("profile", profile, size, "price", price);
  return price ?? 0.0;
};