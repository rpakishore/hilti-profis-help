// ==UserScript==
// @name         Hilti Profis Help
// @description  Creates a mini window with helpful recommendations to mitigate anchor failure in Hilti Profis.
// @copyright    2023, remaa (https://struct.work)
// @license      MIT
// @match        https://profisengineering.hilti.com/design/*
// @grant        none
// @supportURL   https://github.com/rpakishore/hilti-profis-help
// @contributionURL https://github.com/rpakishore/hilti-profis-help/pulls
// @version 1.0.0
// @author remaa
// ==/UserScript==

(function() {
    'use strict';

    var targetButtonSelector = 'div.header-center-button-wrapper button.header-center-button';

    // Create the mini window container
    var container = document.createElement('div');
    container.style.display = 'none';
    container.style.position = 'fixed';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.width = '50%';
    container.style.transform = 'translate(-50%, -50%)';
    container.style.backgroundColor = 'white';
    container.style.border = '1px solid black';
    container.style.padding = '10px';
    container.style.zIndex = '9999';

    // Add custom HTML code to the mini window
    container.innerHTML = `
<h4>Help with Failures</h4>
<p style="font-size:10px">Hover over the recommendations for more information</p>
<style type="text/css">
  .table-container {
    width: 50%;
    float: left;
  }
</style>
<style type="text/css">
  .tg {
    border-collapse: collapse;
    border-color: #9ABAD9;
    border-spacing: 0;
  }

  .tg td {
    background-color: #EBF5FF;
    border-color: #9ABAD9;
    border-style: solid;
    border-width: 1px;
    color: #444;
    font-family: Arial, sans-serif;
    font-size: 14px;
    overflow: hidden;
    padding: 10px 5px;
    word-break: normal;
  }

  .tg th {
    background-color: #409cff;
    border-color: #9ABAD9;
    border-style: solid;
    border-width: 1px;
    color: #fff;
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: normal;
    overflow: hidden;
    padding: 10px 5px;
    word-break: normal;
  }

  .tg .tg-mcqj {
    border-color: inherit;
    font-size: x-small;
    font-weight: bold;
    text-align: left;
    vertical-align: top
  }

  .tg .tg-73oq {
    border-color: inherit;
    font-size: x-small;
    text-align: left;
    vertical-align: top
  }

  .tg .tg-0lax {
    text-align: left;
    vertical-align: top
  }
</style>
<div class="table-container">
  <h6>Tension Failure</h6>
  <table class="tg">
    <thead>
      <tr>
        <th class="tg-mcqj">Failure</th>
        <th class="tg-mcqj">Remarks <br>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-73oq">Steel</td>
        <td class="tg-73oq">
          <ul>
            <li title="Use higher strength steel to improve its ability to withstand tension forces.">Increase Steel Yield Strength</li>
            <li title="Increase the cross-sectional area of the steel member to enhance its load-carrying capacity and resist tension failure.">Increase Steel Section Area</li>
            <li title="Reduce the spacing between steel members to distribute the applied tension load more effectively and minimize the risk of steel failure.">Decrease Steel Spacing</li>
            <li title="Choose a steel type or grade that is specifically designed to withstand high tensile stresses and prevent steel failure.">Select Higher Grade/Strength Steel</li>
            <li title="Implement strict quality control measures during welding to ensure strong and reliable connections that can withstand tension forces without failure.">Ensure High-Quality Welds</li>
            <li title="Provide sufficient and properly designed steel anchorage or connections to prevent steel failure at the interface between different structural elements.">Design Adequate Steel Anchorage/Connections</li>
            <li title="Design the structure in a way that allows for load redistribution and stress transfer to adjacent members, reducing the risk of localized tension steel failure.">Incorporate Load Redistribution Mechanisms</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td class="tg-73oq">Breakout</td>
        <td class="tg-73oq">
          <ul>
            <li title="Increasing the diameter of the anchor can help distribute the load over a larger area, reducing the potential for concrete breakout failure.">Increase Anchor Diameter</li>
            <li title="The distance from the edge of the concrete member to the anchor can significantly impact its performance. Increasing the edge distance can improve the anchor's resistance to concrete breakout failure.">Increase Edge Distance</li>
            <li title="Using a higher strength concrete can enhance its ability to resist breakout failure. Increasing the compressive strength of the concrete can help withstand higher tension forces.">Use Higher Concrete Strength</li>
            <li title="Increasing the depth at which the anchor is embedded in the concrete can provide a larger surface area for load transfer, reducing the risk of breakout failure.">Increase Embedment Depth</li>
            <li title="Different anchor types, such as expansion anchors, adhesive anchors, or mechanical anchors, have varying resistance to concrete breakout failure. Selecting an anchor type specifically designed for tension loads and concrete breakout resistance can improve the overall performance.">Select Appropriate Anchor Type</li>
            <li title="The distance between anchors also plays a role in preventing concrete breakout failure. Decreasing the spacing between anchors can distribute the load more evenly, reducing the likelihood of failure.">Decrease Anchor Spacing</li>
            <li title="Incorporating steel reinforcement, such as rebar or anchor reinforcement, can enhance the overall strength and load-bearing capacity of the concrete and reduce the risk of breakout failure.">Incorporate Reinforcement</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td class="tg-73oq">Bond</td>
        <td class="tg-73oq">
          <ul>
            <li title="Improve the bond strength between the reinforcing steel and the surrounding concrete by using appropriate surface preparation techniques, such as roughening the steel surface or using mechanical anchors.">Increase Bond Strength</li>
            <li title="Increase the length of the steel reinforcement embedded in the concrete to enhance the bond strength and reduce the risk of bond failure.">Increase Embedment Length</li>
            <li title="Provide a thicker concrete cover over the reinforcing steel to enhance the bond between the steel and the concrete.">Increase Concrete Cover</li>
            <li title="Utilize deformed steel bars or wire mesh that have irregular surface patterns to increase the bond strength with the concrete.">Use Deformed Reinforcement</li>
            <li title="Install transverse reinforcement, such as stirrups or ties, around the tensioned steel to enhance the bond strength and prevent bond failure.">Provide Transverse Reinforcement</li>
            <li title="Use high-quality concrete with appropriate mix design, ensuring adequate strength and proper curing, which can contribute to better bond between the steel and the concrete.">Improve Concrete Quality</li>
            <li title="Implement measures to minimize cracking in the concrete, such as proper joint design, crack control reinforcement, and appropriate construction techniques, to prevent bond failure.">Control Cracking</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div class="table-container">
  <h6>Shear Failure</h6>
  <table class="tg">
    <thead>
      <tr>
        <th class="tg-mcqj">Failure</th>
        <th class="tg-mcqj">Remarks <br>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-73oq">Steel</td>
        <td class="tg-73oq">
          <ul>
            <li title="Use higher strength shear steel to improve its ability to withstand shear forces and reduce the risk of shear steel failure.">Increase Shear Steel Strength</li>
            <li title="Increase the cross-sectional area of the shear steel to enhance its load-carrying capacity and resistance to shear failure.">Increase Shear Steel Area</li>
            <li title="Reduce the spacing between shear steel members to improve the shear resistance and prevent shear steel failure.">Decrease Shear Steel Spacing</li>
            <li title="Choose a shear steel type or grade that is specifically designed to withstand high shear stresses and prevent shear steel failure.">Select Appropriate Shear Steel Type/Grade</li>
            <li title="Provide sufficient and properly designed shear steel anchorage or connections to ensure reliable load transfer and prevent shear steel failure at the connection points.">Ensure Proper Shear Steel Anchorage/Connections</li>
            <li title="Utilize shear reinforcement, such as stirrups or bent bars, to enhance the shear resistance and prevent shear steel failure in critical regions.">Incorporate Shear Reinforcement</li>
            <li title="Use high-quality concrete with appropriate mix design, curing, and consolidation techniques to provide a strong and durable bond between the shear steel and the surrounding concrete, reducing the risk of shear steel failure.">Optimize Concrete Strength and Quality</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td class="tg-73oq">Breakout</td>
        <td class="tg-73oq">
          <ul>
            <li title="Increase the distance between the applied shear load and the concrete edge to reduce the risk of shear edge breakout failure.">Increase Edge Distance</li>
            <li title="Use higher strength concrete to enhance its resistance to shear forces and minimize the likelihood of shear edge breakout failure.">Increase Concrete Strength</li>
            <li title="Increase the depth at which the anchor or reinforcement is embedded in the concrete to improve the load transfer mechanism and mitigate shear edge breakout failure.">Increase Embedment Depth</li>
            <li title="Incorporate shear reinforcement, such as stirrups or shear links, to enhance the capacity of the concrete to resist shear forces and prevent shear edge breakout failure.">Use Shear Reinforcement</li>
            <li title="Include edge reinforcement, such as rebar or plate anchors, near the concrete edge to increase its resistance to shear and prevent shear edge breakout failure.">Provide Proper Edge Reinforcement</li>
            <li title="Optimize the spacing and arrangement of anchors or fasteners near the concrete edge to distribute the shear load evenly and avoid concentrated stress points that could lead to shear edge breakout failure.">Adjust Anchor Layout</li>
            <li title="Utilize specialized anchors or systems designed to address shear edge breakout failure, such as undercut anchors or expansion systems specifically engineered for high shear applications.">Consider Specialized Anchors or Systems</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td class="tg-73oq">Pryout</td>
        <td class="tg-73oq">
          <ul>
            <li title="Increase the depth at which the anchor or reinforcement is embedded in the concrete to improve the load transfer mechanism and mitigate shear pryout failure.">Increase Embedment Depth</li>
            <li title="Use higher strength concrete to enhance its resistance to shear forces and reduce the likelihood of shear pryout failure.">Increase Concrete Strength</li>
            <li title="Increase the size and diameter of the anchor or reinforcement to provide a larger contact area and improve resistance against shear pryout failure.">Increase Anchor Size</li>
            <li title="Increase the distance between the applied shear load and the concrete edge to reduce the risk of shear pryout failure.">Increase Edge Distance</li>
            <li title="Incorporate shear reinforcement, such as stirrups, shear links, or shear reinforcement bars, to enhance the capacity of the concrete to resist shear forces and prevent shear pryout failure.">Use Shear Reinforcement</li>
            <li title="Include edge reinforcement, such as additional reinforcing bars or plates, near the concrete edge to increase its resistance to shear and prevent shear pryout failure.">Provide Proper Edge Reinforcement</li>
            <li title="Utilize specialized anchors or systems designed to address shear pryout failure, such as shear lugs, anchor plates, or post-installed shear connectors specifically engineered for resisting pryout forces.">Consider Specialized Anchors or Systems</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<button id="closeButton">Close</button>

    `;

    // Close the mini window and return to the original page
    function closeMiniWindow() {
        container.style.display = 'none';
    }

    // Open the mini window
    function openMiniWindow() {
        container.style.display = 'block';
    }

    // Observe changes in the DOM and execute the script once the desired element is present
    var observer = new MutationObserver(function(mutationsList, observer) {
        for (var i = 0; i < mutationsList.length; i++) {
            var mutation = mutationsList[i];
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                var targetButton = document.querySelector(targetButtonSelector);
                if (targetButton) {
                    // Create the button
                    var button = document.createElement('button');
                    button.id = 'openMiniWindowButton';
                    button.type = 'button';
                    button.className = targetButton.className;
                    button.style.marginLeft = '10px'; // Adjust the margin as needed
                    button.textContent = 'Result Help - AE'; // Set the text content

                    // Append the button next to the original button
                    targetButton.parentNode.parentNode.insertBefore(button, targetButton.nextSibling);

                    // Add an event listener to the button
                    button.addEventListener('click', openMiniWindow);

                    // Add an event listener to the close button
                    var closeButton = container.querySelector('#closeButton');
                    if (closeButton) {
                        closeButton.addEventListener('click', closeMiniWindow);
                    }

                    // Append the mini window container to the document body
                    document.body.appendChild(container);

                    // Disconnect the observer once the button is added
                    observer.disconnect();
                    break;
                }
            }
        }
    });

    // Start observing the DOM changes
    observer.observe(document.body, { childList: true, subtree: true });
})();
