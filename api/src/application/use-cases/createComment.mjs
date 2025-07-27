import { Comment } from "../../domain/entities/comment.mjs";
import { CommentDTO } from "../dtos/commentDTO.mjs";
export default async function cretaeComment(input, { commentRepo }) {
  console.log("input", input);
  const comment = new Comment({
    // id: 0,
    userId: input.userId,
    ticketId: input.ticketId,
    createdAt: input.createdAt ? new Date(input.createdAt) : Date.now(),
    updatedAt: input.updatedAt ? new Date(input.updatedAt) : Date.now(),
    valueComment: input.valueComment,
  });
  console.log("comment", comment);
  const saved = await commentRepo.save(comment);
  console.log("saved", saved);
  return new CommentDTO({
    id: saved.id,
    ticketId: saved.ticketId,
    valueComment: saved.valueComment,
  });
}
