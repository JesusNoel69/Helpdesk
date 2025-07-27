import { CommentDTO } from "../dtos/commentDTO.mjs";

export default async function getCommentById(id, { commentRepo }) {
  const comment = await commentRepo.findById(id);
  console.log(comment);
  if (!comment) {
    throw new Error(`Comment with id=${id.id} not found repo`);
  }
  return new CommentDTO({
    id: comment.id,
    ticketId: comment.ticketId,
    valueComment: comment.valueComment,
  });
}
