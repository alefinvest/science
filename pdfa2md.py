import fitz
from markdownify import markdownify as md

def pdf_to_markdown(pdf_path, md_path):
    # Open the PDF file
    pdf_document = fitz.open(pdf_path)
    markdown_content = ""

    # Iterate through each page
    for page_num in range(len(pdf_document)):
        page = pdf_document.load_page(page_num)
        text = page.get_text("text")
        markdown_content += md(text)

    # Write the markdown content to a file
    with open(md_path, 'w') as md_file:
        md_file.write(markdown_content)

def main():
   pdf_to_markdown("pdfA/[AI]_AUTONOMY_OF_ECONOMIC_AGENTS_IN_P2P.pdf", "[AI]_AUTONOMY_OF_ECONOMIC_AGENTS_IN_P2P.md")
   pdf_to_markdown("pdfA/[AI]_DAO.pdf", "[AI]_DAO.md")
   pdf_to_markdown("pdfA/[AI]_DATA_SECURITY_IN_P2P.pdf", "[AI]_DATA_SECURITY_IN_P2P.md")
   pdf_to_markdown("pdfA/[AI]_REAL_ESTATE_TOKENISATION.pdf", "[AI]_REAL_ESTATE_TOKENISATION.md")
   pdf_to_markdown("pdfA/[AI]_SOUL_BOUND_TOKEN_AS_DIGITAL_TWIN_IN_P2P_ECONOMIC_SYSTEMS.pdf", "[AI]_SOUL_BOUND_TOKEN_AS_DIGITAL_TWIN_IN_P2P_ECONOMIC_SYSTEMS.md")

if __name__ == "__main__":
    main()   
   
   