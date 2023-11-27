// Define the URL for JSON data
const url="https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the json data using d3.json
//d3.json(url).then(function(data){
//    console.log(data);

// Select the first sample from sample array to get graphs
//let sample= data.samples[0];
//console.log(`This is a sample ${sample}`);

// Extract sample values and OTU vaues chnage to format OTU ${otu_id}
//let values=sample.sample_values;
//console.log(`This is value ${values}`);
//let labels = sample.otu_ids.map(otu_id => `OTU ${otu_id}`);
//console.log(`This is otu_ids ${labels}`);
//let labelBubble = sample.otu_ids;
//console.log(`This is otu_ids used for bubble chart ${labelBubble}`);
 
// Bar graph trace
//let trace1=[{
//        y: labels,
//        x: values,
//        type: 'bar',
//        orientation:'h'
//        }];
         
    // Bubble grapg trace
//    let trace2={
//        x: labelBubble,
//       y: values,
//        mode: 'markers',
//        marker: {
//            size: values,
//            color: labelBubble
//        }
        
//          };
//        Plotly.newPlot('bar', trace1);
//        Plotly.newPlot('bubble', [trace2]);
        
//    })
//})
    
    
function init(){
        let dropdownMenu = d3.select("#selDataset");
        d3.json(url).then(function(data){
            console.log(data);
            let names=data.names;
            for (let i = 0; i < names.length; i++){
                dropdownMenu
                    .append("option")
                    .text(names[i])
                    .property("value",names[i])
            }
        });

    };

// Function to handle changes in the dropdown selection
function optionChanged(selectedName) {
    // Fetch data based on the selectedName
    d3.json(url).then(function (data) {
        // Find the selected sample
        //let selectedSample = data.samples.find(sample => sample.id === selectedName);

        // Extract sample values and OTU values formatted as 'OTU {otu_id}'
        //let values = selectedSample.sample_values;
        //let labels = selectedSample.otu_ids.map(otu_id => `OTU ${otu_id}`);
        // Find the selected sample
    let selectedSample = data.samples.find(sample => sample.id === selectedName);

        // Sort sample values in descending order
    let sortedValues = selectedSample.sample_values.slice().sort((a, b) => b - a);

        // Select the top 10 values
       
    let top10Values = sortedValues.slice(0, 10);
    top10Values.reverse();
        // Select corresponding OTU IDs for the top 10 values
    let top10Labels = selectedSample.otu_ids
        .filter((otu_id, index) => index < 10)
        .map(otu_id => `OTU ${otu_id}`);
    top10Labels.reverse();
    let labelBubble = selectedSample.otu_ids;

        // Bar graph trace
    let trace1 = [{
        y: top10Labels,
        x: top10Values,
        type: 'bar',
        orientation: 'h'
    }];

        // Bubble graph trace
    let trace2 = {
        x: labelBubble,
        y: sortedValues,
        mode: 'markers',
        marker: {
            size: sortedValues,
            color: labelBubble
        }
    };

        // Update the 'bar' and 'bubble' plots
    Plotly.newPlot('bar', trace1);
    Plotly.newPlot('bubble', [trace2]);

        // Display sample metadata
    displayMetadata(data.metadata.find(metadata => metadata.id === parseInt(selectedName)));
    });
}

// Function to display sample metadata in HTML
function displayMetadata(metadata) {
    // Assuming you have an HTML element with the id 'sample-metadata' to display the metadata
    let metadataContainer = d3.select("#sample-metadata");

    // Clear any existing content
    metadataContainer.html("");

    // Iterate over metadata properties and append them to the container
    Object.entries(metadata).forEach(([key, value]) => {
        metadataContainer.append("p").text(`${key}: ${value}`);
    });
}

// Initialize the page
init();


        