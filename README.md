# Description
This repo creates KIRA Network's documentation. It uses [docu-notion-kira](https://github.com/kmlbgn/docu-notion-kira) to fetchs content from KIRA's Notion workspace and feeds the output to Docusaurus, a markdown-to-static-html generator.

# How It Works ?

The system fetches content from a Notion root page which operates with two main components:

1. **The Database (Optional)** - This is where the documentation pages are stored. They include content and are equipped with workflow properties to facilitate a Kanban-style management process where pages can have metadata that can be leveraged and are published according to their ‘status’.
2. **The Outline Page (Mandatory)** - This is a central Notion page that organizes content hierarchically. It serves as the foundation of the documentation structure. The arrangement of sub-pages within the Outline is directly reflected in the final documentation site and its sidebar navigation. These sub-pages should link back to the relevant documents housed in the database.

### **Page Structure in the Outline**

Each page listed under the Outline page is expected to be only one of the following type:

- sub-pages (a page containing others pages with content and/or sub-pages)
- symbolic links to other pages of the database (if the database is utilized)
- or standard page with content
    
    The use of the database is optional because pages with content can be directly included in the Outline. However, these pages won't have access to the advanced workflow features provided by the database integration. Sub-pages function as subsections of the documentation. They are transformed into dropdown menus in the sidebar of the documentation site. Due to this structural role, sub-pages cannot hold content themselves (which won’t be displayed), they are only meant to organize the documentation and provide navigation to more detailed content contained in linked or nested pages.
