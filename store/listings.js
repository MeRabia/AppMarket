const listings = [
  {
    id: 10,
    title: "Sac a main 3",
    images: [{ fileName: "sac3" }],
    categoryId: 5,
    price: 50,
    userId: 4,
    location: {
      latitude: 33.2630449,
      longitude: 7.5780716,
    },
  },
  {
    id: 201,
    title: "Beautifull jacket",
    images: [{ fileName: "jacket2" }],
    price: 100,
    categoryId: 5,
    userId: 19,
    location: {
      latitude: 33.2630449,
      longitude: 7.5780716,
    },
  },
  {
    id: 230,
    title: "Red Chemise",
    images: [{ fileName: "clothing1" }],
    price: 100,
    categoryId: 5,
    userId: 51,
    location: {
      latitude: 33.2630449,
      longitude: 7.5780716,
    },
  },
  {
    id: 3,
    title: "Gray couch in a great condition",
    images: [{ fileName: "couch2" }],
    categoryId: 1,
    price: 1200,
    userId: 2,
    location: {
      latitude: 33.2630449,
      longitude: 7.5780716,
    },
  },
  {
    id: 1,
    title: "Room & Board couch (great condition) - delivery included",
    description:
      "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
    images: [
      { fileName: "couch1" },
      { fileName: "couch2" },
      { fileName: "couch3" },
    ],
    price: 1000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 33.2630449,
      longitude: 7.5780716,
    },
  },
  {
    id: 2,
    title: "Designer wear shoes",
    images: [{ fileName: "shoes1" }],
    categoryId: 5,
    price: 100,
    userId: 2,
    location: {
      latitude: 33.2630449,
      longitude: 7.5780716,
    },
  },
  {
    id: 102,
    title: "Canon 400D (Great Condition)",
    images: [{ fileName: "camera1" }],
    price: 300,
    categoryId: 3,
    userId: 2,
    location: {
      latitude: 33.2630449,
      longitude: 7.5780716,
    },
  },
  {
    id: 101,
    title: "Nikon D850 for sale",
    images: [{ fileName: "camera2" }],
    price: 350,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 33.2630449,
      longitude: 7.5780716,
    },
  },
  {
    id: 4,
    title: "Sectional couch - Delivery available",
    description: "No rips no stains no odors",
    images: [{ fileName: "couch3" }],
    categoryId: 1,
    price: 950,
    userId: 2,
    location: {
      latitude: 33.2630449,
      longitude: 7.5780716,
    },
  },
  {
    id: 6,
    title: "Sac a main",
    images: [{ fileName: "sac1" }],
    categoryId: 5,
    price: 50,
    userId: 7,
    location: {
      latitude: 33.2630449,
      longitude: 7.5780716,
    },
  },
  {
    id: 8,
    title: "Sac a main 2",
    images: [{ fileName: "sac2" }],
    categoryId: 5,
    price: 50,
    userId: 2,
    location: {
      latitude: 33.2630449,
      longitude: 7.5780716,
    },
  },
]

const addListing = listing => {
  listing.id = listings.length + 1
  listings.push(listing)
}

const getListings = () => listings

const getListing = id => listings.find(listing => listing.id === id)

const filterListings = predicate => listings.filter(predicate)

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
}
