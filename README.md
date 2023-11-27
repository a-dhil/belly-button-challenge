# belly-button-challenge

GitHub Repo Link: https://github.com/a-dhil/belly-button-challenge
Website Development Link: https://a-dhil.github.io/belly-button-challenge/

# About this challenge

The purpose of this challenge was to create an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.



# Repo structure (important files)

static/js: Folder contains app.js that contains the JavaScript code for the JavaScript functions used to create dashboard.

index.html: Contains the code which is the skeleton of website. Script src html tag contains required modules and sources to run the html page using JavaScript.

samples.json: This file contains the sample of dataset for refrence only.


# How to use this Repository

If reader is looking for the source code for JavaScript go to app.js in static folder. 

Note: There is a lot of parts that are commented in this file because initially the plots were rendered as defult with first sample data later that was incorporated in function. It is kept for reference.

Here is the overview of what each function does.

function init(){...} : This function is created to initialize the page and populate the dropdown menu. It selects dropdown menu using its id from html file and giving json data to it. The relevant information is extracted and looped through the names array to populate dropdown menu. Then option element are appened for each name in the dropdown. Meta data is dispayed as the default for first sample.

function optionChanged(selectedName){...}: This function is designed to handle changes in the dropdown selection. This function used in conjuction with a dropdown menu to dynamically updqate visualizations based on user selections. Things that are being done in this function are:-
                                             
                                             1. Fetch Data
                                             2. Find Selected Sample
                                             3. Sort Sample Values
                                             4.Select Top 10 values and Labels
                                             5.Prepare Bar Graph Trace
                                             6.Prepare Bubble Bar Graph Trace
                                             7.Update Bar and Bubble Plots
                                             8.Display Sample Metadata

function displayMetadata(metadata): This function is responsible for rendering and displaying the metadata of a selected sample in the HTML document.

If reader want to look at how the JavaScript is combined with html look at index.html, especially the tags that conatin <script src="...."> and there order.

# Website

The dashboard created is deployed in free static page hosting service by GitHub. To use it open the link mentioned above, which will take the viewer to the website. The default Test Subject ID No is 940. This can be changed from the drop down menu. Each time its been chnaged the graphs will adapt to the data linked with that particular id.

The sections that change upon selecting id are Demographic Info which displays the info of selected Subject id like there ethnicity, gender,age etc. The bar graph shows top 10 OTU'S found in that individual. Lastly, bubble chart shows the each  selected samples with OTU ID in x axis and sample values on y axis.

# Acknowledgments

This was a challenging task, but I would like to thanks AskBCS Learning Assistant for making it easy and explaing the concept whenever I got struck with code. Sources like ChatGPT was also hepful for providing the solution when I have some piece of code ready and need to build further on it. 