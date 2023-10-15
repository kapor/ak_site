

window.addEventListener("load", function() {
  var iframe = document.querySelector("iframe");
  var imageGallery = iframe.contentWindow.document.querySelector(".image-gallery");
  var aspectRatio = 16/9; // change this to the desired aspect ratio
  var width = imageGallery.offsetWidth;
  var height = width / aspectRatio;
  imageGallery.style.height = height + "px";
});


document.addEventListener('DOMContentLoaded', function () {
  // Scroll to an element by its ID
  function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }

// Update the querySelectorAll function to target the tr elements with the scroll-from class
document.querySelectorAll('tr.scroll-from').forEach(function (scrollFromElement) {
    scrollFromElement.addEventListener('click', function () {
        var dataId = scrollFromElement.getAttribute('data-target');
        scrollToElement(dataId);
    });
});

// Update the function to set the color of a scroll-from element by its data-target attribute
function setScrollFromColor(dataId, color) {
  var scrollFromElement = document.querySelector('tr.scroll-from[data-target="' + dataId + '"]');
  if (scrollFromElement) {
    scrollFromElement.style.color = color;
  }
}

// Reset the colors of all scroll-from elements, excluding the element with excludeId
function resetScrollFromColors(excludeId) {
  document.querySelectorAll('tr.scroll-from').forEach(function (element) {
    if (element.id !== excludeId) {
      element.style.color = '';
    }
  });
}


// Check if the device is a mobile device
function isNarrowViewport() {
  return window.innerWidth < 767;
}

// Set up the IntersectionObserver to detect when elements are visible
function setupIntersectionObserver() {
  var rootElement = isNarrowViewport() ? null : document.querySelector('.column-right');
  var observerOptions = {
    root: rootElement,
    rootMargin: '-35% 0px 60px 0px',
    threshold: [1]
  };

// Array of colors
const colors = [
	'hsl(60, 75%, 75%)', // POINT 1
	'hsl(30, 75%, 75%)', // POINT 2
	'hsl(0, 75%, 75%)', // POINT 3
	'hsl(90, 75%, 75%)', // POINT 4
	'hsl(120, 75%, 75%)', // POINT 5
    'hsl(195, 75%, 75%)', // POINT 6 (new)
    'hsl(150, 75%, 75%)', // POINT 7
    'hsl(180, 75%, 75%)', // POINT 8
    'hsl(210, 75%, 75%)', // POINT 9
    'hsl(240, 75%, 75%)', // POINT 10
    'hsl(270, 75%, 75%)', // POINT 11
    'hsl(300, 75%, 75%)', // POINT 12
    'hsl(330, 75%, 75%)', // POINT 13
    'hsl(350, 75%, 75%)', // POINT 14 (jumps 20)
    'hsl(20, 75%, 75%)', // POINT 15 (jumps 30 again)
    'hsl(50, 75%, 75%)', // POINT 16
];

function observerCallback(entries) {
  let maxIntersectionRatio = 0;
  let mostVisibleEntry = null;

  entries.forEach(function (entry) {
    if (entry.intersectionRatio > maxIntersectionRatio) {
      maxIntersectionRatio = entry.intersectionRatio;
      mostVisibleEntry = entry;
    }
  });

  if (mostVisibleEntry && mostVisibleEntry.isIntersecting) {
    resetScrollFromColors(mostVisibleEntry.target.id);
    setScrollFromColor(mostVisibleEntry.target.id, 'black');
    
    // Get the point index
    const pointIndex = parseInt(mostVisibleEntry.target.id.replace('point', '')) - 1;

    // Update the target element selector and assign the color based on the point index

    
     var borderColumn = document.querySelector('.border-column');
      borderColumn.style.borderBottom = '5px solid ' + colors[pointIndex];
    
  }
}

  

  var observer = new IntersectionObserver(observerCallback, observerOptions);

  document.querySelectorAll('.column-right h6').forEach(function (element) {
    observer.observe(element);
  });
}

  setupIntersectionObserver();

  // Set the initial state for point1
  setScrollFromColor("point1", "black");
  setScrollFromColor("point2", "");
  setScrollFromColor("point3", "");
  setScrollFromColor("point4", "");
  setScrollFromColor("point5", "");
  setScrollFromColor("point6", "");
  setScrollFromColor("point7", "");
  setScrollFromColor("point8", "");
   setScrollFromColor("point9", "");
});




  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.onload = function() {
    scrollToTop(".container");
    scrollToTop(".column-left");
    scrollToTop(".column-right");
  };

  function scrollToTop(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollTop = 0;
    } else {
      console.warn(`Element with selector '${selector}' not found.`);
    }
  }
