export default async function deleteComment(id, { commentRepo }) {
  const affected = await commentRepo.delete(id);
  if (affected === 0) throw new Error(`Comment ${id.id} not found`);
  return affected;
}
