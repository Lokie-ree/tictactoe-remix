import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const themes = ["light", "dark"] as const
  const currentIndex = themes.indexOf(theme === "light" || theme === "dark" ? theme : "light")
  const nextTheme = themes[(currentIndex + 1) % themes.length]

  const handleClick = () => {
    setTheme(nextTheme)
  }

  const iconTheme = theme === "light" || theme === "dark" ? theme : "light"

  return (
    <Button variant="outline" size="icon" onClick={handleClick}>
      {iconTheme === "light" && <Sun className="h-[1.2rem] w-[1.2rem]" />}
      {iconTheme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
