// src/components/Hero.tsx
--- a/src/components/Hero.tsx
+++ b/src/components/Hero.tsx
@@
-  <section
-    id="hero"
-    className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
+  <section
+    id="hero"
+    className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 bg-navyBlue text-white"
  >
@@
-    <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
+    <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-white max-w-lg md:max-w-2xl mx-auto">
       Kellgreat
     </h1>
-    <p className="mt-4 text-foreground max-w-lg mx-auto">
+    <p className="mt-4 text-white max-w-lg mx-auto">
       Conecta freelancers bloqueados con clientes, sin comisiones ocultas ni sorpresas.
     </p>
@@
     <div className="mt-6">
       <a
         href="/gigs"
-        className="px-8 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
+        className="px-8 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
       >
         Explorar Gigs
       </a>
     </div>
@@
     <Image
       src="/images/hero-mockup.png"
       width={384}
       height={340}
       quality={100}
       sizes="(max-width: 768px) 100vw, 384px"
       priority
       unoptimized
       alt="Vista de la plataforma Kellgreat"
       className="relative mt-12 md:mt-16 mx-auto z-10"
     />
