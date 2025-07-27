// src/application/use-cases/updateComment.mjs
import { Comment } from "../../domain/entities/comment.mjs";
import { CommentDTO } from "../dtos/commentDTO.mjs";

export default async function updateComment(input, id, { commentRepo }) {
  console.log(id);
  const original = await commentRepo.findById({ id });
  console.log(original);
  if (!original) {
    throw new Error(`Comment with id ${id} not found`);
  }
  const comment = new Comment({
    id,
    userId: input.userId !== undefined ? Number(input.userId) : original.userId,
    ticketId:
      input.ticketId !== undefined ? Number(input.ticketId) : original.ticketId,
    valueComment: input.valueComment ?? original.valueComment,
    createdAt: original.createdAt,
    updatedAt: new Date(),
  });

  console.log(comment);
  const saved = await commentRepo.save(comment);

  return new CommentDTO({
    id: saved.id,
    userId: saved.userId,
    ticketId: saved.ticketId,
    valueComment: saved.valueComment,
    createdAt: saved.createdAt,
    updatedAt: saved.updatedAt,
  });
}
