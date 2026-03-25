import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understanding JavaScript Hoisting | Amit Kumar",
  description: "A deep dive into how JavaScript Hoisting works, including let, const, var, and function declarations.",
  openGraph: {
    title: "Understanding JavaScript Hoisting",
    description: "A deep dive into how JavaScript Hoisting works, including let, const, var, and function declarations.",
  }
};

export default function BlogPost() {
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
          Understanding Hoisting in JavaScript
        </h1>
        
        <div className="prose prose-invert prose-orange max-w-none prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-neutral-300 prose-p:leading-relaxed prose-pre:bg-[#1a1a1a] prose-pre:border prose-pre:border-white/10" itemProp="articleBody">
          <p>
            If you have been writing JavaScript for a while, you have probably encountered situations where variables or functions seem to be available before they are even declared. This phenomenon is known as <strong>Hoisting</strong>.
          </p>

          <h2>What is Hoisting?</h2>
          <p>
            Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (to the top of the current script or the current function) before code execution.
          </p>
          <p>
            Wait, hold on—the code isn't <em>actually</em> physically moved. Instead, what happens under the hood during the compilation phase is that variable and function declarations are put into memory before execution begins.
          </p>

          <h2>Function Hoisting</h2>
          <p>
            One of the most obvious manifestations of hoisting is with function declarations. You can call a function in your code before you define it:
          </p>
          
          <pre className="p-4 rounded-xl overflow-x-auto text-sm bg-neutral-900 border border-white/10 my-6">
            <code className="text-neutral-200">
{`sayHello(); // Output: "Hello World!"

function sayHello() {
  console.log("Hello World!");
}`}
            </code>
          </pre>

          <p>
            Because function declarations are hoisted completely, they are available in memory and ready to be used before the execution phase hits their actual definition line.
          </p>

          <h2>Variable Hoisting (var)</h2>
          <p>
            Variables declared with <code>var</code> are also hoisted, but with a major catch: only their <em>declarations</em> are hoisted, not their <em>initializations</em>. Until they are assigned a value during execution, they are assigned the value <code>undefined</code>.
          </p>

          <pre className="p-4 rounded-xl overflow-x-auto text-sm bg-neutral-900 border border-white/10 my-6">
            <code className="text-neutral-200">
{`console.log(myName); // Output: undefined
var myName = "Amit";
console.log(myName); // Output: "Amit"`}
            </code>
          </pre>

          <h2>let and const (The Temporal Dead Zone)</h2>
          <p>
            What about <code>let</code> and <code>const</code>? Are they hoisted? The answer might surprise you: <strong>Yes, they are.</strong>
          </p>
          <p>
            However, unlike <code>var</code>, they are not initialized with <code>undefined</code>. Until the line of code is reached where they are defined, they reside in what is known as the <strong>Temporal Dead Zone (TDZ)</strong>. Accessing them inside the TDZ throws a <code>ReferenceError</code>.
          </p>

          <pre className="p-4 rounded-xl overflow-x-auto text-sm bg-neutral-900 border border-white/10 my-6">
            <code className="text-neutral-200">
{`console.log(user); // ReferenceError: Cannot access 'user' before initialization
let user = "Amit";`}
            </code>
          </pre>

          <h2>Arrow Functions and Class Declarations</h2>
          <p>
            Unlike regular function declarations, classes and functions created via <code>const</code>/<code>let</code> assignments (including arrow functions) are hoisted but sit in the Temporal Dead Zone. You cannot use them before they are declared in the code.
          </p>

          <h2>Conclusion</h2>
          <p>
            Understanding hoisting helps you navigate some of JS's weirdest quirks. The best practice in modern JavaScript is simple: <strong>Always use <code>let</code> and <code>const</code></strong>, and always declare your variables at the top of their respective scopes!
          </p>
        </div>
      </div>
    </article>
  );
}
