import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microtasks and Macrotasks in JavaScript | Amit Kumar",
  description: "Exploring the JavaScript Event Loop, Microtasks (Promises), and Macrotasks (setTimeout) to understand asynchronous execution.",
  openGraph: {
    title: "Microtasks and Macrotasks in JavaScript",
    description: "Exploring the JavaScript Event Loop, Microtasks (Promises), and Macrotasks (setTimeout) to understand asynchronous execution.",
  }
};

export default function AsyncBlog() {
  return (
    <article className="w-full h-full min-h-screen pt-28 pb-20 px-4 sm:px-8 lg:px-16" itemScope itemType="https://schema.org/BlogPosting">
      
      <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#ff6b00] transition-colors mb-12 group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <div className="max-w-3xl">
        <div className="mb-4 text-[#ff6b00] font-mono text-sm tracking-widest uppercase">
          <time dateTime="2026-03-25" itemProp="datePublished">March 25, 2026</time>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight" itemProp="headline">
          Asynchronous JS: Microtasks vs Macrotasks
        </h1>
        
        <div className="prose prose-invert prose-orange max-w-none prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-neutral-300 prose-p:leading-relaxed prose-pre:bg-[#1a1a1a] prose-pre:border prose-pre:border-white/10" itemProp="articleBody">
          <p>
            JavaScript is single-threaded, yet it handles complex asynchronous operations with ease. This magic happens thanks to the <strong>Event Loop</strong>. But did you know that not all asynchronous tasks are created equal?
          </p>

          <h2>The Event Loop Recap</h2>
          <p>
            The Event Loop essentially waits for the Call Stack to be empty. Once it is, it picks up tasks from queues and pushes them onto the stack. However, there are two distinct types of queues: the <strong>Microtask Queue</strong> and the <strong>Task Queue (Macrotask Queue)</strong>.
          </p>

          <h2>What are Macrotasks?</h2>
          <p>
            Macrotasks are the standard tasks you might be familiar with. Each macrotask is executed in its entirety, and the browser can render in between them.
          </p>
          <ul>
            <li><code>setTimeout</code></li>
            <li><code>setInterval</code></li>
            <li><code>setImmediate</code> (Node.js)</li>
            <li>I/O operations</li>
            <li>UI rendering</li>
          </ul>

          <h2>What are Microtasks?</h2>
          <p>
            Microtasks are usually scheduled for things that should happen immediately after the currently executing script. The crucial difference is that the Event Loop will empty the <strong>entire</strong> microtask queue before moving on to the next macrotask or rendering.
          </p>
          <ul>
            <li><code>Promise</code> callbacks (<code>.then</code>, <code>.catch</code>, <code>.finally</code>)</li>
            <li><code>MutationObserver</code></li>
            <li><code>queueMicrotask()</code></li>
          </ul>

          <h2>The Execution Order</h2>
          <p>
            The order of execution is:
          </p>
          <ol>
            <li>Execute one Macrotask (initial script is a macrotask).</li>
            <li>Execute <strong>all</strong> available Microtasks.</li>
            <li>Render UI (if needed).</li>
            <li>Execute the next Macrotask.</li>
          </ol>

          <pre className="p-4 rounded-xl overflow-x-auto text-sm bg-neutral-900 border border-white/10 my-6">
            <code className="text-neutral-200">
{`console.log("Start");

setTimeout(() => {
  console.log("Timeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise (Microtask)");
});

console.log("End");`}
            </code>
          </pre>

          <p><strong>Predicted Output:</strong></p>
          <pre className="p-4 rounded-xl overflow-x-auto text-sm bg-neutral-900 border border-white/10 my-6">
            <code className="text-neutral-300">
{`Start
End
Promise (Microtask)
Timeout (Macrotask)`}
            </code>
          </pre>

          <h2>Why does it matter?</h2>
          <p>
            Knowing the difference helps you avoid performance bottlenecks. If you flood the Microtask queue (e.g., with recursive promises), you can actually block the browser from rendering, making the UI feel frozen. Macrotasks, on the other hand, allow the browser to "breathe" between executions.
          </p>

          <h2>Conclusion</h2>
          <p>
            Next time you're debugging an asynchronous flow, remember: <strong>Microtasks come first!</strong> Understanding this priority queue system is key to mastering the JavaScript Event Loop.
          </p>
        </div>
      </div>
    </article>
  );
}
