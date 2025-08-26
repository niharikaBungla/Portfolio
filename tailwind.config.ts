import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				surface: 'hsl(var(--surface))',
				'surface-elevated': 'hsl(var(--surface-elevated))',
				foreground: 'hsl(var(--foreground))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
				
				/* Primary Gradient System */
				'primary-start': 'hsl(var(--primary-start))',
				'primary-middle': 'hsl(var(--primary-middle))',
				'primary-end': 'hsl(var(--primary-end))',
				
				/* Accent Colors */
				'accent-cyan': 'hsl(var(--accent-cyan))',
				'accent-pink': 'hsl(var(--accent-pink))',
				'accent-purple': 'hsl(var(--accent-purple))',
				
				/* Glassmorphic */
				'glass-bg': 'hsla(var(--glass-bg))',
				'glass-border': 'hsla(var(--glass-border))',
				'glass-hover': 'hsla(var(--glass-hover))',
				
				/* Glows */
				'glow-primary': 'hsla(var(--glow-primary))',
				'glow-accent': 'hsla(var(--glow-accent))',
				'glow-soft': 'hsla(var(--glow-soft))',
				
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-glow': 'var(--gradient-glow)',
				'gradient-mesh': 'var(--gradient-mesh)',
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'elevation': 'var(--shadow-elevation)', 
				'float': 'var(--shadow-float)',
			},
			backdropBlur: {
				'glass': '20px',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow': {
					'0%': { boxShadow: '0 0 20px hsl(var(--glow-primary))' },
					'100%': { boxShadow: '0 0 40px hsl(var(--glow-primary))' }
				},
				'slideUp': {
					'0%': { transform: 'translateY(60px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slideDown': {
					'0%': { transform: 'translateY(-60px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'fadeIn': {
					'0%': { opacity: '0', filter: 'blur(10px)' },
					'100%': { opacity: '1', filter: 'blur(0px)' }
				},
				'scaleIn': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'bounceIn': {
					'0%': { transform: 'scale(0.3)', opacity: '0' },
					'50%': { transform: 'scale(1.1)', opacity: '0.8' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'slide-up': 'slideUp 0.6s ease-out',
				'slide-down': 'slideDown 0.6s ease-out',
				'fade-in': 'fadeIn 0.8s ease-out',
				'scale-in': 'scaleIn 0.5s ease-out',
				'bounce-in': 'bounceIn 0.8s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
