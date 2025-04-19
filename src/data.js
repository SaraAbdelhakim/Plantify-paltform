export const plants = [
    {
        id: 1,
        image: '/img/snake-plant-beige-pot-by-wall.jpg',
        name: 'Aloe Vera',
        type: 'Succulent',
        duration: '2 Weeks - July 1 to July 14',
        location: 'New York',
        isAvailable: true,
        ownerName: 'John Doe',
        description: 'Aloe Vera is a succulent plant species of the genus Aloe. It is widely known for its medicinal properties and is often used in skincare products.',
    },
    {
        id: 2,
        image: '/img/monstera.jpg',
        name: 'Monstera',
        type: 'Succulent',
        duration: '2 Weeks - July 1 to July 14',
        location: 'New York',
        isAvailable: true,
        ownerName: 'Jane Smith',
        description: 'Monstera, also known as the Swiss Cheese Plant, is a tropical plant native to Central America. It is popular for its unique leaf shape and is often used in home decor.',
    },
    {
        id: 3,
        image: '/img/monstera.jpg',
        name: 'Monstera',
        type: 'Succulent',
        duration: '2 Weeks - July 1 to July 14',
        location: 'New York',
        isAvailable: true,
        ownerName: 'Alice Johnson',
        description: 'Monstera, also known as the Swiss Cheese Plant, is a tropical plant native to Central America. It is popular for its unique leaf shape and is often used in home decor.',
    },
    {
        id: 4,
        image: '/img/monstera.jpg',
        name: 'Monstera',
        type: 'Succulent',
        duration: '2 Weeks - July 1 to July 14',
        location: 'New York',
        isAvailable: true,
        ownerName: 'Bob Brown',
        description: 'Monstera, also known as the Swiss Cheese Plant, is a tropical plant native to Central America. It is popular for its unique leaf shape and is often used in home decor.',
    }
]

export const mockRequests = [
    {
      id: 1,
      plantName: "Monstera Deliciosa",
      plantType: "Tropical",
      image: "/img/monstera.jpg",
      startDate: "2024-03-15",
      endDate: "2024-03-30",
      location: "Brooklyn, NY",
      status: "available",
      sitter: null
    },
    {
      id: 2,
      plantName: "Peace Lily",
      plantType: "Indoor",
      image: "/img/peace-lily.jpg",
      startDate: "2024-04-01",
      endDate: "2024-04-10",
      location: "Manhattan, NY",
      status: "booked",
      sitter: {
        name: "Sarah Johnson",
        email: "sarah@example.com"
      }
    }
  ];


export const DUMMY_REQUESTS = [
    {
      id: 101,
      plantId: 1, // link to plant
      startDate: "2024-04-01",
      endDate: "2024-04-15",
      location: "San Francisco, CA",
      requestTime: "2025-03-10T08:30:00",
      status: "pending",
      sitter: null,
      owner: {
        name: "Emma Wilson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60",
        area: "Pacific Heights"
      }
    },
    {
      id: 102,
      plantId: 2, // link to plant
      startDate: "2024-04-10",
      endDate: "2024-04-30",
      location: "San Francisco, CA",
      requestTime: "2024-03-09T15:45:00",
      status: "pending",
      sitter: null,
      owner: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60",
        area: "Hayes Valley"
      }
    }
  ];
  