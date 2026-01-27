import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./resources/**/*.{blade.php,vue,js,ts}"],
  theme: {
  	fontFamily: {
  		sans: [
  			'Noto Sans JP',
  			'Noto Sans',
  			'system-ui',
  			'sans-serif'
  		]
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				'50': '#FFF7ED',
  				'100': '#FFE8D9',
  				'500': '#F97316',
  				'600': '#EA580C',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			gray: {
  				'50': '#F8F8FB',
  				'100': '#F1F1F4',
  				'200': '#E8E8EB',
  				'400': '#CACACE',
  				'500': '#949497',
  				'600': '#757578',
  				'700': '#626264',
  				'800': '#414143'
  			},
  			red: {
  				'50': '#FEF2F2',
  				'500': '#EF4444',
  				'600': '#DC2626'
  			},
  			yellow: {
  				'50': '#FFFBEB'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
