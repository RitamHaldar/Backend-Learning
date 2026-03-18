import { PDFParse } from "pdf-parse";

export async function pdftool() {
    const url = './resume.pdf';
    const parser = new PDFParse({ url });

    const result = await parser.getText();
    return result.text;
}
