import { z } from "zod";

export const schedulingSchema = z.object({
    nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("E-mail inválido"),
    whatsapp: z.string().min(10, "WhatsApp inválido"),
    estilo: z.enum(["Fineline", "Blackwork", "Geek", "Outro"]),
    descricao: z.string().min(10, "Conte um pouco mais sobre sua ideia"),
    referencia: z.any().optional(),
});
