const paginate = (followers) => {
  const flerPerPage = 10;
  const pageNumger = Math.ceil(followers.length / flerPerPage);
  const newFollower = Array.from({ length: pageNumger }, (_, i) => {
    const start = i * flerPerPage;
    return followers.slice(start, start + flerPerPage);
  });
  return newFollower;
};
export default paginate;
