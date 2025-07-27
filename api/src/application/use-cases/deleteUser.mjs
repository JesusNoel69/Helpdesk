export default async function deleteUser({ id }, { userRepo }) {
  const affected = userRepo.delete(id);
  if (affected === 0) throw new Error(`User ${id} not found`);
  return affected;
}
