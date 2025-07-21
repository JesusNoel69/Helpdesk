import listTickets from "../../application/use-cases/listAllTickets.mjs";
import getTicketById from "../../application/use-cases/getTicketById.mjs";
import createTicket from "../../application/use-cases/createTicket.mjs";
import updateTicket from "../../application/use-cases/updateTicket.mjs";
import deleteTicket from "../../application/use-cases/deleteTicket.mjs";
import { MySqlTicketRepo } from "../repositories/MySqlTicketRepo.mjs";
import { json, parseJson } from "../../infrastructure/helpers/helpers.mjs";

const ticketRepo = new MySqlTicketRepo();

export async function router(req, res) {
  try {
    //curl http://localhost:3000/tickets
    if (req.method === "GET" && req.url === "/tickets") {
      return json(res, 200, await listTickets(null, { ticketRepo }));
    }
    if (req.method === "GET" && /^\/tickets\/\d+$/.test(req.url)) {
      const id = +req.url.split("/")[2];
      return json(res, 200, await getTicketById({ id }, { ticketRepo }));
    }
    if (req.method === "POST" && req.url === "/tickets") {
      const input = await parseJson(req);
      return json(res, 201, await createTicket(input, { ticketRepo }));
    }
    if (req.method === "DELETE" && /^\/tickets\/\d+$/.test(req.url)) {
      const id = +req.url.split("/")[2];
      await deleteTicket({ id }, { ticketRepo });
      return json(res, 204);
    }
    if (req.method === "PUT" && /^\/tickets\/\d+$/.test(req.url)) {
      const id = +req.url.split("/")[2];
      const input = await parseJson(req);
      const ticketUpdated = await updateTicket(
        { input },
        { id },
        { ticketRepo }
      );
      return json(res, 200, ticketUpdated);
    }

    throw new Error("Route not found");
  } catch (err) {
    return json(res, err.statusCode || 500, { error: err.message });
  }
}
