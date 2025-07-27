import { CommentDTO } from "../dtos/commentDTO.mjs";

export default async function getAllComments(_, { commentRepo }) {
  const comments = await commentRepo.findAll();
  return comments.map((comment) => {
    return new CommentDTO({
      id: comment.id,
      ticketId: comment.ticketId,
      valueComment: comment.valueComment,
    });
  });
}
