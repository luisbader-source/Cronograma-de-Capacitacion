import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video, Users, TrendingUp, CheckCircle } from "lucide-react";

/**
 * Diseño: Modernismo Corporativo Elevado
 * - Paleta: Verde Unicórdoba (#1B7D3D) + Blanco + Gris neutro
 * - Tipografía: Poppins (títulos) + Inter (cuerpo)
 * - Layout: Panel lateral de facultades + contenido principal
 * - Jerarquía clara y espaciado generoso
 */

const SCHEDULE_DATA = [
  {
    id: "agronomia",
    name: "Ciencias Agrícolas",
    icon: "🌾",
    day: "Lunes",
    date: "23/02/2026",
    topic: "Uso de Plataformas institucionales",
    time: "09:00 AM - 10:00 AM",
    zoomLink: "https://renata.zoom.us/j/83700656092",
  },
  {
    id: "veterinaria",
    name: "Medicina Veterinaria y Zootecnia",
    icon: "🐾",
    day: "Lunes",
    date: "23/02/2026",
    topic: "Uso de Plataformas institucionales",
    time: "09:00 AM - 10:00 AM",
    zoomLink: "https://renata.zoom.us/j/83700656092",
  },
  {
    id: "ingenieria",
    name: "Ingenierías",
    icon: "⚙️",
    day: "Martes",
    date: "24/02/2026",
    topic: "Uso de Plataformas institucionales",
    time: "09:00 AM - 10:00 AM",
    zoomLink: "https://renata.zoom.us/j/83700656092",
  },
  {
    id: "ciencias-basicas",
    name: "Ciencias Básicas",
    icon: "🔬",
    day: "Martes",
    date: "24/02/2026",
    topic: "Uso de Plataformas institucionales",
    time: "09:00 AM - 10:00 AM",
    zoomLink: "https://renata.zoom.us/j/83700656092",
  },
  {
    id: "economia",
    name: "Ciencias Económicas, Jurídicas y Administrativas",
    icon: "💼",
    day: "Miércoles",
    date: "25/02/2026",
    topic: "Uso de Plataformas institucionales",
    time: "09:00 AM - 10:00 AM",
    zoomLink: "https://renata.zoom.us/j/83700656092",
  },
  {
    id: "educacion",
    name: "Educación y Ciencias Humanas",
    icon: "📚",
    day: "Jueves",
    date: "26/02/2026",
    topic: "Uso de Plataformas institucionales",
    time: "09:00 AM - 10:00 AM",
    zoomLink: "https://renata.zoom.us/j/83700656092",
  },
  {
    id: "salud",
    name: "Ciencias de la Salud",
    icon: "⚕️",
    day: "Viernes",
    date: "27/02/2026",
    topic: "Uso de Plataformas institucionales",
    time: "09:00 AM - 10:00 AM",
    zoomLink: "https://renata.zoom.us/j/83700656092",
  },
];

const DAYS_ORDER = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

// Datos de consolidado de capacitaciones
const CONSOLIDATED_DATA = [
  { day: "Lunes", date: "23/02/2026", students: 101, completed: true },
  { day: "Martes", date: "24/02/2026", students: 0, completed: false },
  { day: "Miércoles", date: "25/02/2026", students: 0, completed: false },
  { day: "Jueves", date: "26/02/2026", students: 0, completed: false },
  { day: "Viernes", date: "27/02/2026", students: 0, completed: false },
];

export default function Home() {
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null);

  const selectedData = selectedFaculty
    ? SCHEDULE_DATA.find((item) => item.id === selectedFaculty)
    : null;

  const getFacultiesByDay = (day: string) => {
    return SCHEDULE_DATA.filter((item) => item.day === day);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between gap-6">
            <div className="flex-shrink-0">
              <img
                src="/logo-unicordoba.png"
                alt="Universidad de Cordoba"
                className="h-24 w-auto"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-3xl font-display text-foreground">
                Cronograma de Capacitacion
              </h1>
              <p className="text-sm text-muted-foreground mt-2">
                Universidad de Cordoba - Semana del 23 al 27 de febrero de 2026
              </p>
              <p className="text-xs text-muted-foreground mt-1 italic">
                Un legado de transformacion social
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Consolidado de Capacitaciones */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/20 border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-heading text-foreground mb-2 flex items-center justify-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Consolidado de Capacitaciones
            </h2>
            <p className="text-muted-foreground">
              Avance diario de estudiantes capacitados durante la semana
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {CONSOLIDATED_DATA.map((day, index) => (
              <Card 
                key={day.day} 
                className={`text-center transition-all duration-300 ${
                  day.completed 
                    ? 'bg-primary/5 border-primary/30 shadow-sm' 
                    : 'bg-white border-border opacity-75'
                }`}
              >
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center justify-center mb-2">
                    {day.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                    )}
                  </div>
                  <h3 className="font-heading text-sm text-foreground mb-1">
                    {day.day}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {day.date}
                  </p>
                  <div className="text-lg font-bold text-primary">
                    {day.students}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    estudiantes
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-4 bg-white rounded-lg px-6 py-3 border border-border shadow-sm">
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Total acumulado</p>
                <p className="text-2xl font-bold text-primary">
                  {CONSOLIDATED_DATA.reduce((total, day) => total + day.students, 0)}
                </p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Progreso semanal</p>
                <p className="text-lg font-semibold text-foreground">
                  {CONSOLIDATED_DATA.filter(day => day.completed).length}/5 días
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Facultades */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-lg font-heading text-foreground mb-4">
                Facultades
              </h2>
              <div className="space-y-2">
                {SCHEDULE_DATA.map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      setSelectedFaculty(
                        selectedFaculty === item.id ? null : item.id
                      )
                    }
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 border ${
                      selectedFaculty === item.id
                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                        : "bg-white text-foreground border-border hover:bg-secondary hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {selectedData ? (
              // Detalle de facultad seleccionada
              <div className="space-y-6">
                <Card className="border-2 border-primary shadow-lg">
                  <CardHeader className="bg-primary text-primary-foreground">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{selectedData.icon}</span>
                        <div>
                          <CardTitle className="text-2xl text-primary-foreground">
                            {selectedData.name}
                          </CardTitle>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    {/* Información del día */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">
                            Día
                          </p>
                          <p className="font-heading text-foreground">
                            {selectedData.day}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {selectedData.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">
                            Horario
                          </p>
                          <p className="font-heading text-foreground">
                            {selectedData.time}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tema */}
                    <div>
                      <h3 className="text-sm font-heading text-muted-foreground uppercase tracking-wide mb-2">
                        Tema de Capacitación
                      </h3>
                      <p className="text-lg text-foreground leading-relaxed">
                        {selectedData.topic}
                      </p>
                    </div>

                    {/* Botón Zoom */}
                    <div className="pt-4 border-t border-border">
                      <a href={selectedData.zoomLink} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading py-6 text-base gap-2">
                          <Video className="w-5 h-5" />
                          Acceder a la Sesión de Zoom
                        </Button>
                      </a>
                      <p className="text-xs text-muted-foreground text-center mt-3">
                        La sesión se abrirá en una nueva ventana
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Información adicional */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Información Importante</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-foreground">
                    <div className="flex gap-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p>
                        Asegúrate de tener Zoom instalado o acceso a través del navegador
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p>
                        Se recomienda conectarse 5 minutos antes de la hora de inicio
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              // Vista de cronograma por días
              <div className="space-y-8">
                <div className="bg-secondary rounded-lg p-6 border border-border">
                  <h2 className="text-lg font-heading text-foreground mb-2">
                    Bienvenido al Cronograma de Capacitación
                  </h2>
                  <p className="text-foreground">
                    Selecciona tu facultad en el panel izquierdo para ver los detalles de tu
                    sesión de capacitación y acceder al enlace de Zoom.
                  </p>
                </div>

                {DAYS_ORDER.map((day) => {
                  const facultiesForDay = getFacultiesByDay(day);
                  return (
                    <div key={day}>
                      <h3 className="text-xl font-heading text-foreground mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {DAYS_ORDER.indexOf(day) + 1}
                        </span>
                        {day}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {facultiesForDay.map((faculty) => (
                          <Card
                            key={faculty.id}
                            className="cursor-pointer hover:shadow-md transition-shadow border border-border hover:border-primary/50"
                            onClick={() => setSelectedFaculty(faculty.id)}
                          >
                            <CardContent className="pt-6">
                              <div className="flex items-start justify-between mb-3">
                                <span className="text-3xl">{faculty.icon}</span>
                                <Badge
                                  variant="outline"
                                  className="text-xs bg-secondary text-primary border-primary/30"
                                >
                                  {faculty.time}
                                </Badge>
                              </div>
                              <h4 className="font-heading text-foreground mb-2">
                                {faculty.name}
                              </h4>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {faculty.topic}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            {/* Logo CINTIA */}
            <div className="flex-shrink-0">
              <img
                src="/logo-cintia.png"
                alt="CINTIA - Centro de Innovacion en TIC"
                className="h-16 w-auto"
              />
            </div>
            
            {/* Texto del footer */}
            <div className="text-center text-sm text-muted-foreground flex-grow">
              <p className="font-medium text-foreground mb-1">
                Centro de Innovacion en TIC para Apoyo a la Academia
              </p>
              <p>
                © 2026 Universidad de Cordoba. Cronograma de Capacitacion para Estudiantes.
              </p>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-border pt-4 text-center text-xs text-muted-foreground">
            <p>Plataforma de Capacitacion Institucional</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
