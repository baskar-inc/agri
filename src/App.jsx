import { useMemo, useState } from 'react'
import { Camera, Cloud, Database, Leaf, MapPin, Plane, RefreshCw, ShieldCheck, Wifi } from 'lucide-react'
import { supabase } from './lib/supabase'

const demoSensorData = [
  { id: 1, field: 'Field A', temperature: 29.4, humidity: 67, soilMoisture: 42, health: 'Healthy', capturedAt: '10:42 AM' },
  { id: 2, field: 'Field B', temperature: 31.1, humidity: 58, soilMoisture: 31, health: 'Monitor', capturedAt: '10:37 AM' },
  { id: 3, field: 'Field C', temperature: 28.7, humidity: 72, soilMoisture: 54, health: 'Healthy', capturedAt: '10:31 AM' },
]

function Metric({ label, value, unit, icon: Icon }) {
  return (
    <div className="metric">
      <div className="metric-icon"><Icon size={18} /></div>
      <div>
        <span>{label}</span>
        <strong>{value}<small>{unit}</small></strong>
      </div>
    </div>
  )
}

function App() {
  const [lastRefresh, setLastRefresh] = useState('Just now')
  const [selectedField, setSelectedField] = useState('Field A')
  const [connection, setConnection] = useState(supabase ? 'Supabase configured' : 'Demo mode')

  const selected = useMemo(
    () => demoSensorData.find((row) => row.field === selectedField) ?? demoSensorData[0],
    [selectedField],
  )

  async function refreshData() {
    setLastRefresh('Refreshing...')
    if (supabase) {
      const { error } = await supabase.from('sensor_data').select('*').limit(1)
      setConnection(error ? 'Supabase connected, query needs schema check' : 'Supabase connected')
    }
    setTimeout(() => setLastRefresh('Just now'), 400)
  }

  return (
    <main className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark"><Leaf size={24} /></div>
          <div>
            <h1>AgriDrone</h1>
            <p>Drone Integrated Plant Health System</p>
          </div>
        </div>
        <div className="status"><span className="dot" />{connection}</div>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">FINAL-YEAR PROJECT</p>
          <h2>Plant health monitoring from the air.</h2>
          <p className="hero-copy">
            Monitor drone imagery and field sensor information in one application.
            The current interface uses verified project architecture with safe demo data
            when the external Supabase schema is not available.
          </p>
          <div className="actions">
            <button onClick={refreshData}><RefreshCw size={16} /> Refresh data</button>
            <button className="secondary"><Camera size={16} /> Capture workflow</button>
          </div>
        </div>
        <div className="flight-card">
          <div className="flight-header"><span>FLIGHT SYSTEM</span><Plane size={20} /></div>
          <div className="flight-status">READY</div>
          <div className="flight-grid">
            <div><span>Controller</span><b>Pixhawk</b></div>
            <div><span>Camera</span><b>ESP32-CAM / OV2640</b></div>
            <div><span>Trigger</span><b>PWM</b></div>
            <div><span>Mode</span><b>Monitoring</b></div>
          </div>
        </div>
      </section>

      <section className="metrics">
        <Metric label="Temperature" value={selected.temperature} unit="°C" icon={Cloud} />
        <Metric label="Humidity" value={selected.humidity} unit="%" icon={Wifi} />
        <Metric label="Soil moisture" value={selected.soilMoisture} unit="%" icon={Database} />
        <Metric label="Plant health" value={selected.health} unit="" icon={ShieldCheck} />
      </section>

      <section className="content-grid">
        <div className="panel">
          <div className="panel-title">
            <div><h3>Field monitoring</h3><p>Latest sensor snapshot</p></div>
            <select value={selectedField} onChange={(e) => setSelectedField(e.target.value)}>
              {demoSensorData.map((row) => <option key={row.field}>{row.field}</option>)}
            </select>
          </div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Field</th><th>Temperature</th><th>Humidity</th><th>Soil</th><th>Status</th></tr></thead>
              <tbody>
                {demoSensorData.map((row) => (
                  <tr key={row.id} onClick={() => setSelectedField(row.field)}>
                    <td><b>{row.field}</b></td><td>{row.temperature} °C</td><td>{row.humidity}%</td>
                    <td>{row.soilMoisture}%</td><td><span className={row.health === 'Healthy' ? 'pill good' : 'pill warn'}>{row.health}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="panel analysis">
          <div className="panel-title"><div><h3>Plant health analysis</h3><p>Rule-based project analysis</p></div><Leaf size={20} /></div>
          <div className="health-score">{selected.health === 'Healthy' ? '82' : '64'}<span>/100</span></div>
          <p className="analysis-text">
            {selected.health === 'Healthy'
              ? 'Current readings are within the demonstration thresholds. Continue monitoring the field through the next capture cycle.'
              : 'Soil moisture is below the demonstration threshold. Review the field during the next flight and compare with recent imagery.'}
          </p>
          <div className="threshold"><span>Selected field</span><b>{selectedField}</b></div>
          <div className="threshold"><span>Last capture</span><b>{selected.capturedAt}</b></div>
        </div>
      </section>

      <section className="workflow">
        <div className="panel-title"><div><h3>System workflow</h3><p>End-to-end project architecture</p></div><MapPin size={20} /></div>
        <div className="steps">
          {['Drone flight', 'Pixhawk control', 'PWM camera trigger', 'ESP32-CAM capture', 'Application / Supabase', 'Plant-health visualization'].map((step, i) => (
            <div className="step" key={step}><span>{i + 1}</span><b>{step}</b></div>
          ))}
        </div>
      </section>

      <footer>AgriDrone • Design and Implementation of Drone Integrated Plant Health System • Data view: {lastRefresh}</footer>
    </main>
  )
}

export default App
