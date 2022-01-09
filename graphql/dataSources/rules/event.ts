import Event from "../Event";
import Trial from "../Trial";
export const checkIfEventHasRuns = async (eventDataSource: Event, trialDataSource: Trial, eventId: string) => {

  const eventTrials = await eventDataSource.getEventTrials(eventId);
  const runCounts = await Promise.all(eventTrials.map(async ({ trialId }) => {
    const { runCount } = await trialDataSource.getTrialRunCount(trialId);
    return runCount;
  }));  

  return runCounts.every((runCount) => runCount > 0);

}