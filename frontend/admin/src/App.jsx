import React from "react";
import "./index.css";

function App() {
  return (
  
    <div className="flex flex-col w-full min-h-screen bg-background">
      <header className="flex items-center justify-between h-16 px-6 border-b shrink-0">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#FF0000"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-5 h-5"
            >
              <path d="M2 20h.01"></path>
              <path d="M7 20v-4"></path>
              <path d="M12 20v-8"></path>
              <path d="M17 20V8"></path>
              <path d="M22 4v16"></path>
            </svg>
            <span className="sr-only">Notifications</span>
          </button>
          <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border">
            <img className="aspect-square h-full w-full" alt="@username" src="/placeholder-user.jpg" />
          </span>
        </div>
      </header>
      <main className="flex-1 grid gap-8 p-6 md:p-10">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Feedback</h2>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              View All
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-6 grid gap-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">John Doe (Math Teacher)</div>
                  <div className="flex items-center gap-1 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 text-muted-foreground"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  The math teacher was very helpful and explained the concepts clearly.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-6 grid gap-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Jane Smith (English Teacher)</div>
                  <div className="flex items-center gap-1 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">The English teacher was very knowledgeable and engaging.</p>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-6 grid gap-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Michael Johnson (Science Teacher)</div>
                  <div className="flex items-center gap-1 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 text-muted-foreground"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 text-muted-foreground"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  The science teacher could have explained the concepts better.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-6 grid gap-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Emily Davis (History Teacher)</div>
                  <div className="flex items-center gap-1 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 fill-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  The history teacher was very helpful and responsive to questions.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-muted-foreground flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-green-500 text-white hover:bg-green-600 transition-colors">
                Best Feedback: Jane Smith (English Teacher)
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-red-500 text-white hover:bg-red-600 transition-colors">
                Worst Feedback: Michael Johnson (Science Teacher)
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Requests</h2>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              View All
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-6 grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Sarah Lee</div>
                  <div className="text-sm text-muted-foreground">Meeting: 2023-05-15 10:00 AM</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  I need to cancel my meeting with John Doe on 2023-05-15 at 10:00 AM. I have a family emergency and
                  won't be able to attend.
                </p>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  Post to Community
                </button>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-6 grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">David Kim</div>
                  <div className="text-sm text-muted-foreground">Meeting: 2023-05-20 2:00 PM</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  I need to cancel my meeting with Jane Smith on 2023-05-20 at 2:00 PM. I have a work conflict and won't
                  be able to attend.
                </p>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  Post to Community
                </button>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-6 grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Lisa Chen</div>
                  <div className="text-sm text-muted-foreground">Meeting: 2023-05-22 9:00 AM</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  I need to cancel my meeting with Michael Johnson on 2023-05-22 at 9:00 AM. I have a personal matter to
                  attend to and won't be able to make it.
                </p>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  Post to Community
                </button>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-6 grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Alex Patel</div>
                  <div className="text-sm text-muted-foreground">Meeting: 2023-05-25 4:00 PM</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  I need to cancel my meeting with Emily Davis on 2023-05-25 at 4:00 PM. I have a scheduling conflict
                  and won't be able to attend.
                </p>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  Post to Community
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Volunteer Approval</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-6 grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">John Smith</div>
                  <div className="text-sm text-muted-foreground">
                    Qualifications: Bachelor's in Education, 5 years teaching experience
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  John has applied to be a volunteer teacher for our after-school program. His qualifications seem to
                  meet our requirements. Do you approve his application?
                </p>
                <div className="flex justify-end gap-2">
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-green-500 text-white hover:bg-green-600 transition-colors">
                    Approve
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-red-500 text-white hover:bg-red-600 transition-colors">
                    Deny
                  </button>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-6 grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Sarah Lee</div>
                  <div className="text-sm text-muted-foreground">
                    Qualifications: Master's in Mathematics, 2 years tutoring experience
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sarah has applied to be a volunteer math tutor for our after-school program. Her qualifications seem
                  to meet our requirements. Do yo
                </p>
                <div className="flex justify-end gap-2">
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-green-500 text-white hover:bg-green-600 transition-colors">
                    Approve
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-red-500 text-white hover:bg-red-600 transition-colors">
                    Deny
                  </button>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-6 grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Michael Chen</div>
                  <div className="text-sm text-muted-foreground">
                    Qualifications: High school diploma, no teaching experience
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Michael has applied to be a volunteer assistant for our after-school prog
                </p>
                <div className="flex justify-end gap-2">
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-green-500 text-white hover:bg-green-600 transition-colors">
                    Approve
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-red-500 text-white hover:bg-red-600 transition-colors">
                    Deny
                  </button>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-6 grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Emily Patel</div>
                  <div className="text-sm text-muted-foreground">Qualifications: Bachelor's in E</div>
                </div>
                <p className="text-sm text-muted-foreground">Emily has applied to be a volu</p>
                <div className="flex justify-end gap-2">
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-green-500 text-white hover:bg-green-600 transition-colors">
                    Approve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
   
  );
}

export default App;
