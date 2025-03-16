export default function handler(req, res) {
    if (req.method === "POST") {
        res.status(200).json({ message: "Upload recebido com sucesso!" });
    } else {
        res.status(405).json({ error: "Método não permitido" });
    }
}
