const fs = require('fs');
const pdf = require('pdf-parse');
const TurndownService = require('turndown');

const turndownService = new TurndownService();

async function pdfToMarkdown(pdfPath, mdPath) {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);

    // Convert the text content to Markdown
    const markdownContent = turndownService.turndown(data.text);

    // Write the markdown content to a file
    fs.writeFileSync(mdPath, markdownContent);
}

// Convert multiple PDFs to Markdown
async function convertMultiplePDFs() {
    try {
        await pdfToMarkdown("pdfA/[AI]_AUTONOMY_OF_ECONOMIC_AGENTS_IN_P2P.pdf", "[AI]_AUTONOMY_OF_ECONOMIC_AGENTS_IN_P2P.md");
        await pdfToMarkdown("pdfA/[AI]_DAO.pdf", "[AI]_DAO.md");
        await pdfToMarkdown("pdfA/[AI]_DATA_SECURITY_IN_P2P.pdf", "[AI]_DATA_SECURITY_IN_P2P.md");
        await pdfToMarkdown("pdfA/[AI]_REAL_ESTATE_TOKENISATION.pdf", "[AI]_REAL_ESTATE_TOKENISATION.md");
        await pdfToMarkdown("pdfA/[AI]_SOUL_BOUND_TOKEN_AS_DIGITAL_TWIN_IN_P2P_ECONOMIC_SYSTEMS.pdf", "[AI]_SOUL_BOUND_TOKEN_AS_DIGITAL_TWIN_IN_P2P_ECONOMIC_SYSTEMS.md");
        console.log('All PDFs converted to Markdown successfully');
    } catch (err) {
        console.error('Error converting PDFs to Markdown:', err);
    }
}

convertMultiplePDFs();