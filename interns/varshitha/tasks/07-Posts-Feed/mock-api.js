function fetchPostsMock() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    userId: 1,
                    title: "Learning JavaScript",
                    body: "JavaScript is an important language for building interactive web applications."
                },
                {
                    id: 2,
                    userId: 2,
                    title: "Understanding Async Await",
                    body: "Async and await make asynchronous JavaScript code easier to read and understand."
                },
                {
                    id: 3,
                    userId: 1,
                    title: "Getting Started With APIs",
                    body: "APIs allow applications to communicate with other services and exchange data."
                },
                {
                    id: 4,
                    userId: 3,
                    title: "Why Use Fetch",
                    body: "The fetch function is used to make HTTP requests and retrieve data from a server."
                },
                {
                    id: 5,
                    userId: 2,
                    title: "Building Responsive Websites",
                    body: "Responsive design helps websites work properly on mobile phones, tablets and desktops."
                },
                {
                    id: 6,
                    userId: 3,
                    title: "Introduction to Web Development",
                    body: "Web development combines HTML, CSS and JavaScript to create useful websites and applications."
                },
                {
                    id: 7,
                    userId: 4,
                    title: "Working With JSON Data",
                    body: "JSON is a common format used for transferring structured data between applications."
                },
                {
                    id: 8,
                    userId: 4,
                    title: "Frontend Development Basics",
                    body: "Frontend development focuses on the part of a website that users see and interact with."
                }
            ]);
        }, 1500);
    });
}

function fetchPostsMockFail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Mock API request failed"));
        }, 1500);
    });
}