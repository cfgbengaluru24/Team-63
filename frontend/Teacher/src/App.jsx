import React from "react";
const App = () => {

  return (

<div className="flex min-h-screen w-full flex-col bg-muted/40">
  <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
    <button
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 sm:hidden"
      type="button"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="radix-:rk:"
      data-state="closed"
    >
      <div className="h-5 w-5"></div>
      <span className="sr-only">Toggle Menu</span>
    </button>
    <nav aria-label="breadcrumb" classNameName="hidden md:flex">
      <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
        <li className="inline-flex items-center gap-1.5">
          <a className="transition-colors hover:text-foreground" href="#">
            Dashboard
          </a>
        </li>
      </ol>
    </nav>
    <div className="relative ml-auto flex-1 md:grow-0">
      <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"></div>
      <input
        className="flex h-10 border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        placeholder="Search students..."
        type="search"
      />
    </div>
    <button
      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 overflow-hidden rounded-full"
      type="button"
      id="radix-:rn:"
      aria-haspopup="menu"
      aria-expanded="false"
      data-state="closed"
      fdprocessedid="xfguj"
    >
      <img
        src="/placeholder.svg"
        width="36"
        height="36"
        alt="Avatar"
        className="overflow-hidden rounded-full"
        style="aspect-ratio: 36 / 36; object-fit: cover;"
      />
    </button>
  </header>
  <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Leave Request</h3>
          <p className="text-sm text-muted-foreground">Apply for a leave of absence.</p>
        </div>
        <div className="p-6">
          <form>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="start-date"
                  >
                    Start Date
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="start-date"
                    type="date"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="end-date"
                  >
                    End Date
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="end-date"
                    type="date"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="reason"
                >
                  Reason
                </label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="reason"
                  placeholder="Explain the reason for your leave request"
                ></textarea>
              </div>
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="attachments"
                >
                  Attachments
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="attachments"
                  multiple=""
                  type="file"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="items-center p-6 flex justify-end gap-2">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            fdprocessedid="d82ms"
          >
            Cancel
          </button>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            fdprocessedid="s9yku"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Student Discussions</h3>
          <p className="text-sm text-muted-foreground">Respond to student questions and doubts.</p>
        </div>
        <div className="p-6">
          <div className="grid gap-4">
            <div className="flex items-start gap-4">
              <div className="rounded-lg w-11 h-11 bg-[#55efc4] text-3xl flex items-center justify-center">😁</div>
              <div className="grid gap-1 items-start text-sm">
                <div className="flex items-center gap-2">
                  <div className="font-bold">Student A</div>
                  <div className="text-sm text-muted-foreground">2:39pm</div>
                </div>
                <div>
                  <p>
                    I'm having trouble understanding the concept of inheritance in JavaScript. Can you please
                    explain it to me?
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-7 gap-1 text-sm"
                    fdprocessedid="flf1dn"
                  >
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
                      className="h-3.5 w-3.5"
                    >
                      <polyline points="9 17 4 12 9 7"></polyline>
                      <path d="M20 18v-2a4 4 0 0 0-4-4H4"></path>
                    </svg>
                    Reply
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-lg w-11 h-11 bg-[#ffeaa7] text-3xl flex items-center justify-center">😎</div>
              <div className="grid gap-1 items-start text-sm">
                <div className="flex items-center gap-2">
                  <div className="font-bold">Student B</div>
                  <div className="text-sm text-muted-foreground">2:40pm</div>
                </div>
                <div>
                  <p>I'm having trouble with the assignment on CSS grid. Can you provide some guidance?</p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-7 gap-1 text-sm"
                    fdprocessedid="l9shx"
                  >
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
                      className="h-3.5 w-3.5"
                    >
                      <polyline points="9 17 4 12 9 7"></polyline>
                      <path d="M20 18v-2a4 4 0 0 0-4-4H4"></path>
                    </svg>
                    Reply
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-lg w-11 h-11 bg-[#fdcb6e] text-3xl flex items-center justify-center">🤠</div>
              <div className="grid gap-1 items-start text-sm">
                <div className="flex items-center gap-2">
                  <div className="font-bold">Student C</div>
                  <div className="text-sm text-muted-foreground">2:41pm</div>
                </div>
                <div>
                  <p>
                    I'm struggling with the math problem set. Can you provide some examples to help me understand
                    better?
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-7 gap-1 text-sm"
                    fdprocessedid="zvt8t"
                  >
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
                      className="h-3.5 w-3.5"
                    >
                      <polyline points="9 17 4 12 9 7"></polyline>
                      <path d="M20 18v-2a4 4 0 0 0-4-4H4"></path>
                    </svg>
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Student List</h3>
          <p className="text-sm text-muted-foreground">View and manage your students.</p>
        </div>
        <div className="p-6">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&amp;_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Name
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Email
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Grade
                  </th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="[&amp;_tr:last-child]:border-0">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <div className="font-medium">John Doe</div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">johndoe@example.com</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">A</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-7 gap-1 text-sm"
                      fdprocessedid="qn2z9"
                    >
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
                        className="h-3.5 w-3.5"
                      >
                        <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"></path>
                      </svg>
                      Edit
                    </button>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <div className="font-medium">Jane Smith</div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">janesmith@example.com</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">B+</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-7 gap-1 text-sm"
                      fdprocessedid="jw4ick"
                    >
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
                        className="h-3.5 w-3.5"
                      >
                        <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"></path>
                      </svg>
                      Edit
                    </button>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <div className="font-medium">Michael Johnson</div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">michaelj@example.com</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">C</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-7 gap-1 text-sm"
                      fdprocessedid="dkmd6a"
                    >
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
                        className="h-3.5 w-3.5"
                      >
                        <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"></path>
                      </svg>
                      Edit
                    </button>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <div className="font-medium">Emily Davis</div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">emilyd@example.com</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">A-</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-7 gap-1 text-sm"
                      fdprocessedid="jkl3dt"
                    >
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
                        className="h-3.5 w-3.5"
                      >
                        <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"></path>
                      </svg>
                      Edit
                    </button>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <div className="font-medium">David Lee</div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">davidl@example.com</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">B</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-7 gap-1 text-sm"
                      fdprocessedid="pu7y99"
                    >
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
                        className="h-3.5 w-3.5"
                      >
                        <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"></path>
                      </svg>
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
  )
};

export default App;