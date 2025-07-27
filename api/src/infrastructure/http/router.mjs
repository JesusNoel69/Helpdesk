import listTickets from "../../application/use-cases/listAllTickets.mjs";
import getTicketById from "../../application/use-cases/getTicketById.mjs";
import createTicket from "../../application/use-cases/createTicket.mjs";
import updateTicket from "../../application/use-cases/updateTicket.mjs";
import deleteTicket from "../../application/use-cases/deleteTicket.mjs";

import getAllUsers from "../../application/use-cases/getAllUsers.mjs";
import getUserById from "../../application/use-cases/getUserById.mjs";
import createUser from "../../application/use-cases/createUser.mjs";
import updateUser from "../../application/use-cases/updateUser.mjs";
import deleteUser from "../../application/use-cases/deleteUser.mjs";

import getAllComments from "../../application/use-cases/getAllComments.mjs";
import getCommentById from "../../application/use-cases/getCommentById.mjs";
import createComment from "../../application/use-cases/createComment.mjs";
import updateComment from "../../application/use-cases/updateComment.mjs";
import deleteComment from "../../application/use-cases/deleteComment.mjs";

import { MySqlTicketRepo } from "../repositories/MySqlTicketRepo.mjs";
import { MySqlCommentRepo } from "../repositories/MySQLCommentRepo.mjs";
import { MySqlUserRepo } from "../repositories/MySQLUserRepo.mjs";

import { json, parseJson } from "../../infrastructure/helpers/helpers.mjs";

const ticketRepo = new MySqlTicketRepo();
const commentRepo = new MySqlCommentRepo();
const userRepo = new MySqlUserRepo();

export async function router(req, res) {
  try {
    console.log(req.url);
    //curl -X GET http://localhost:3000/tickets
    if (req.method === "GET" && req.url === "/tickets") {
      return json(res, 200, await listTickets(null, { ticketRepo }));
    }
    //curl -X GET http://localhost:3000/tickets/1
    if (req.method === "GET" && /^\/tickets\/\d+$/.test(req.url)) {
      const id = +req.url.split("/")[2];
      return json(res, 200, await getTicketById({ id }, { ticketRepo }));
    }
    /*
    curl -X POST http://localhost:3000/tickets ^
      -H "Content-Type: application/json" ^
      -d "{\"responsibleId\":1,\"stateId\":2,\"stateColor\":\"#FFD700\",\"priorityId\":3,\"priorityName\":\"High\",\"title\":\"Prueba ticket\",\"timeStart\":\"2025-07-26T14:00:00Z\",\"details\":\"Detalle…\",\"closedAt\":null, \"promiseEnd\":\"2025-07-27T14:00:00Z\"}"
    */
    if (req.method === "POST" && req.url === "/tickets") {
      const input = await parseJson(req);
      return json(res, 201, await createTicket(input, { ticketRepo }));
    }
    //curl -X DELETE http://localhost:3000/tickets/6
    if (req.method === "DELETE" && /^\/tickets\/\d+$/.test(req.url)) {
      const id = +req.url.split("/")[2];
      const result = await deleteTicket({ id }, { ticketRepo });
      if (result == 0) {
        return json(res, 404, { error: `Ticket ${id} not found` });
      }
      return json(res, 204, { message: `Ticket ${id} deleted successfully` });
    }
    /*
    curl -X PUT http://localhost:3000/tickets/5 ^
      -H "Content-Type: application/json" ^
      -d "{\"responsibleId\":1,\"title\":\"Título modificado\",\"details\":\"Nuevo detalle\",\"stateId\":2,\"stateColor\":\"#00FF00\",\"priorityId\":1,\"priorityName\":\"Low\",\"timeStart\":\"2025-07-26T14:00:00Z\",\"promiseEnd\":\"2025-07-27T14:00:00Z\",\"closedAt\":null}"
    */
    if (req.method === "PUT" && /^\/tickets\/\d+$/.test(req.url)) {
      const id = +req.url.split("/")[2];
      const input = await parseJson(req);
      const ticketUpdated = await updateTicket(input, { id }, { ticketRepo });
      return json(res, 200, ticketUpdated);
    }

    //users
    //curl http://localhost:3000/users
    if (req.method === "GET" && req.url === "/users") {
      return json(res, 200, await getAllUsers(null, { userRepo }));
    }
    //curl http://localhost:3000/users/1
    if (req.method === "GET" && /^\/users\/\d+$/.test(req.url)) {
      const id = +req.url.split("/")[2];
      return json(res, 200, await getUserById({ id }, { userRepo }));
    }
    /*
    curl -X POST http://localhost:3000/users ^
      -H "Content-Type: application/json" ^
      -d "{\"roleUserId\":2,\"nameUser\":\"juan\",\"passwordUser\":\"Secr3t!#\",\"account\":\"juan@example.com\"}"
    */
    if (req.method === "POST" && req.url === "/users") {
      const input = await parseJson(req);
      return json(res, 201, await createUser(input, { userRepo }));
    }

    /*>curl -X DELETE http://localhost:3000/users/10*/
    if (req.method === "DELETE" && /^\/users\/\d+$/.test(req.url)) {
      const id = +req.url.split("/")[2];
      const result = await deleteUser({ id }, { userRepo });
      if (result === 0) {
        return json(res, 404, { error: `User ${id} not found` });
      }
      return json(res, 200, { message: `User ${id} deleted successfully` });
    }
    /*
      curl -X PUT http://localhost:3000/users/1 ^
        -H "Content-Type: application/json" ^
        -d "{\"roleUserId\":3,\"nameUser\":\"juanp\",\"passwordUser\":\"Nuev@Pass1\",\"account\":\"juanp@example.com\"}"
    */
    if (req.method === "PUT" && /^\/users\/\d+$/.test(req.url)) {
      const id = +req.url.split("/")[2];
      const input = await parseJson(req);
      const userUpdated = await updateUser(input, { id }, { userRepo });
      return json(res, 200, userUpdated);
    }
    //comments
    //curl -X GET http://localhost:3000/comments
    if (req.method === "GET" && req.url === "/comments") {
      return json(res, 200, await getAllComments(null, { commentRepo }));
    }
    //curl -X GET http://localhost:3000/comments/1
    if (req.method === "GET" && /^\/comments\/\d+$/.test(req.url)) {
      const id = +req.url.split("/")[2];
      return json(res, 200, await getCommentById({ id }, { commentRepo }));
    }
    /*
    curl -X POST http://localhost:3000/comments ^
      -H "Content-Type: application/json" ^
      -d "{\"userId\":1,\"ticketId\":1,\"valueComment\":\"Este es un comentario de prueba\"}"
     */
    if (req.method === "POST" && req.url === "/comments") {
      const input = await parseJson(req);
      return json(res, 201, await createComment(input, { commentRepo }));
    }
    //curl -X DELETE http://localhost:3000/comments/1
    if (req.method === "DELETE" && /^\/comments\/\d+$/.test(req.url)) {
      const id = +req.url.split("/")[2];
      const result = await deleteComment({ id }, { commentRepo });
      if (result == 0) {
        return json(res, 404, { error: `Comment ${id} not found` });
      }
      return json(res, 204, { message: `Comment ${id} deleted successfully` });
    }
    /*
    curl -X PUT http://localhost:3000/comments/5 ^
      -H "Content-Type: application/json" ^
      -d "{\"valueComment\":\"Comentario actualizado\"}"
    */
    if (req.method === "PUT" && /^\/comments\/\d+$/.test(req.url)) {
      const id = +req.url.split("/")[2];
      const input = await parseJson(req);
      const commentUpdated = await updateComment(input, id, { commentRepo });
      return json(res, 200, commentUpdated);
    }

    throw new Error("Route not found");
  } catch (err) {
    console.log(err);
    return json(res, err.statusCode || 500, { error: err.message });
  }
}
