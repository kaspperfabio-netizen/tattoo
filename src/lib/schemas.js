import { z } from "zod";

export const schedulingSchema = z.object({
    nome: z.string({ required_error: "Nome é obrigatório" })
        .min(3, "O nome deve ter pelo menos 3 caracteres")
        .max(100, "Nome muito longo"),

    email: z.string({ required_error: "E-mail é obrigatório" })
        .email("Digite um e-mail válido"),

    whatsapp: z.string({ required_error: "WhatsApp é obrigatório" })
        .min(10, "Número de WhatsApp incompleto (DDD + número)")
        .regex(/^[0-9]+$/, "Apenas números são permitidos"),

    estilo: z.enum(["Fineline", "Blackwork", "Geek", "Outro"], {
        errorMap: () => ({ message: "Selecione um estilo válido" })
    }),

    descricao: z.string({ required_error: "A descrição é obrigatória" })
        .min(10, "Conte um pouco mais sobre sua ideia (mínimo 10 caracteres)")
        .max(500, "Descrição muito longa (máximo 500 caracteres)"),

    referencia: z.any()
        .optional()
        .refine((files) => {
            if (!files || files.length === 0) return true;
            return files[0].size <= 5 * 1024 * 1024; // 5MB
        }, "O arquivo deve ser menor que 5MB")
        .refine((files) => {
            if (!files || files.length === 0) return true;
            return ["image/jpeg", "image/png", "image/webp"].includes(files[0].type);
        }, "Formato inválido. Use JPG, PNG ou WebP"),
});
