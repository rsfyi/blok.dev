import { BrutalistButton } from "../../registry/brutalist/buttons/button";
import { Heart, Mail } from "lucide-react";

export default function BrutalistDesignPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Brutalist Design System</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Default variant */}
          <div className="p-6 bg-slate-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Default Button</h3>
            <BrutalistButton>Default Button</BrutalistButton>
          </div>

          {/* Secondary variant */}
          <div className="p-6 bg-slate-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Secondary Button</h3>
            <BrutalistButton variant="secondary">
              Secondary Button
            </BrutalistButton>
          </div>

          {/* Destructive variant */}
          <div className="p-6 bg-slate-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Destructive Button</h3>
            <BrutalistButton variant="destructive">
              Destructive Button
            </BrutalistButton>
          </div>

          {/* Ring variant */}
          <div className="p-6 bg-slate-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Ring Button</h3>
            <BrutalistButton variant="ring">Ring Button</BrutalistButton>
          </div>

          {/* Outline variant */}
          <div className="p-6 bg-slate-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Outline Button</h3>
            <BrutalistButton variant="outline">Outline Button</BrutalistButton>
          </div>

          {/* Link variant */}
          <div className="p-6 bg-slate-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Link Button</h3>
            <div className="flex flex-col items-start gap-4">
              <BrutalistButton
                withShadow={false}
                variant="link"
                className="text-blue-600"
              >
                Link Button
              </BrutalistButton>
            </div>
          </div>

          {/* With Icon (left) */}
          <div className="p-6 bg-slate-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">With Icon (Left)</h3>
            <BrutalistButton withIcon="left" icon={<Heart />}>
              Like
            </BrutalistButton>
          </div>

          {/* With Icon (right) */}
          <div className="p-6 bg-slate-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">With Icon (Right)</h3>
            <BrutalistButton withIcon="right" icon={<Mail />}>
              Send Email
            </BrutalistButton>
          </div>

          {/* Icon only */}
          <div className="p-6 bg-slate-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Icon Button</h3>
            <div className="flex space-x-4">
              <BrutalistButton size="icon" variant="default">
                <Heart className="h-5 w-5" />
              </BrutalistButton>
              <BrutalistButton size="icon" variant="secondary">
                <Mail className="h-5 w-5" />
              </BrutalistButton>
              <BrutalistButton size="icon" variant="destructive">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </BrutalistButton>
            </div>
          </div>

          {/* Loading state */}
          <div className="p-6 bg-slate-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Loading Button</h3>
            <BrutalistButton isLoading>Loading</BrutalistButton>
          </div>

          {/* Size variants */}
          <div className="p-6 bg-slate-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Size Variants</h3>
            <div className="flex flex-col gap-4 items-start">
              <BrutalistButton size="sm">Small Button</BrutalistButton>
              <BrutalistButton>Default Size</BrutalistButton>
              <BrutalistButton size="lg">Large Button</BrutalistButton>
            </div>
          </div>

          {/* Without Shadow */}
          <div className="p-6 bg-slate-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Without Shadow</h3>
            <BrutalistButton withShadow={false}>No Shadow</BrutalistButton>
          </div>

          {/* Gradient Button */}
          <div className="p-6 bg-slate-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Gradient Button</h3>
            <BrutalistButton variant="gradient">Gradient</BrutalistButton>
          </div>

          {/* Custom Styling */}
          <div className="p-6 bg-slate-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Custom Styling</h3>
            <BrutalistButton className="bg-gradient-to-r from-pink-500 to-orange-500 text-white border-black">
              Custom Gradient
            </BrutalistButton>
          </div>

          {/* Variant Combinations */}
          <div className="p-6 bg-slate-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Variant Combinations</h3>
            <div className="flex flex-col gap-4 items-start">
              <BrutalistButton variant="gradient" size="sm">
                Small Gradient
              </BrutalistButton>
              <BrutalistButton
                variant="destructive"
                withIcon="left"
                icon={
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                }
              >
                Delete with Icon
              </BrutalistButton>
              <BrutalistButton variant="outline" size="lg" withShadow={false}>
                Large Outline No Shadow
              </BrutalistButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
