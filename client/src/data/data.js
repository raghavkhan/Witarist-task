export const mapData = (data) => {
  const mapOverData = data?.map((ob) => ({
    id: ob?._id,
    taskName: ob?.taskName || "",
    priority: ob?.priority || "",
    // city: ob?.city || '',
  }));
  return mapOverData;
};
