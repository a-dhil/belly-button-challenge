// Define the URL for JSON data
const url="https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the json data using d3.json
d3.json(url).then(function(data){
    console.log(data);

// Select the first sample from sample array to get graphs
let sample= data.samples[0];
console.log(`This is a sample ${sample}`);

// Extract sample values and OTU vaues chnage to format OTU ${otu_id}
let values=sample.sample_values;
console.log(`This is value ${values}`);
let labels = sample.otu_ids.map(otu_id => `OTU ${otu_id}`);
console.log(`This is otu_ids ${labels}`);
let labelBubble = sample.otu_ids;
console.log(`This is otu_ids used for bubble chart ${labelBubble}`);
 
// Bar graph trace
let trace1=[{
        y: labels,
        x: values,
        type: 'bar',
        orientation:'h'
        }];
         
    // Bubble grapg trace
    let trace2={
        x: labelBubble,
        y: values,
        mode: 'markers',
        marker: {
            size: values,
            color: labelBubble
        }
        
          };
        Plotly.newPlot('bar', trace1);
        Plotly.newPlot('bubble', [trace2]);
        
    })

