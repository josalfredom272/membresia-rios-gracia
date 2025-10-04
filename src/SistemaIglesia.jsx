import React, { useState } from 'react';
import { Users, UserPlus, Edit2, Archive, Search, Church, Calendar, Phone, Mail, MapPin, X } from 'lucide-react';

const FormularioCampos = ({ miembro, onChange, esNuevo }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
      <input
        type="text"
        name="nombre"
        value={miembro.nombre}
        onChange={(e) => onChange(e, esNuevo)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Apellido *</label>
      <input
        type="text"
        name="apellido"
        value={miembro.apellido}
        onChange={(e) => onChange(e, esNuevo)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Cédula *</label>
      <input
        type="text"
        name="cedula"
        value={miembro.cedula}
        onChange={(e) => onChange(e, esNuevo)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
      <input
        type="tel"
        name="telefono"
        value={miembro.telefono}
        onChange={(e) => onChange(e, esNuevo)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        type="email"
        name="email"
        value={miembro.email}
        onChange={(e) => onChange(e, esNuevo)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Nacimiento *</label>
      <input
        type="date"
        name="fechaNacimiento"
        value={miembro.fechaNacimiento}
        onChange={(e) => onChange(e, esNuevo)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Bautismo *</label>
      <input
        type="date"
        name="fechaBautismo"
        value={miembro.fechaBautismo || ''}
        onChange={(e) => onChange(e, esNuevo)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Ingreso *</label>
      <input
        type="date"
        name="fechaIngreso"
        value={miembro.fechaIngreso}
        onChange={(e) => onChange(e, esNuevo)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Estado Civil *</label>
      <select
        name="estadoCivil"
        value={miembro.estadoCivil}
        onChange={(e) => onChange(e, esNuevo)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="Soltero">Soltero(a)</option>
        <option value="Casado">Casado(a)</option>
        <option value="Viudo">Viudo(a)</option>
        <option value="Divorciado">Divorciado(a)</option>
        <option value="Unión Libre">Unión Libre</option>
      </select>
    </div>
    <div className="md:col-span-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">Dirección *</label>
      <input
        type="text"
        name="direccion"
        value={miembro.direccion}
        onChange={(e) => onChange(e, esNuevo)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  </div>
);

export default function SistemaIglesia() {
  const [seccionActual, setSeccionActual] = useState('listado');
  const [miembros, setMiembros] = useState([
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      cedula: '1234567890',
      telefono: '3001234567',
      email: 'juan.perez@email.com',
      direccion: 'Calle 50 #30-20',
      fechaNacimiento: '1985-05-15',
      fechaBautismo: '2000-08-20',
      fechaIngreso: '2020-01-10',
      estadoCivil: 'Casado',
      activo: true
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'González',
      cedula: '9876543210',
      telefono: '3109876543',
      email: 'maria.gonzalez@email.com',
      direccion: 'Carrera 45 #25-10',
      fechaNacimiento: '1990-08-22',
      fechaBautismo: '2005-12-10',
      fechaIngreso: '2019-03-15',
      estadoCivil: 'Soltera',
      activo: true
    }
  ]);
  
  const [miembrosInactivos, setMiembrosInactivos] = useState([
    {
      id: 3,
      nombre: 'Carlos',
      apellido: 'Ramírez',
      cedula: '5555555555',
      telefono: '3205555555',
      email: 'carlos.ramirez@email.com',
      direccion: 'Avenida 70 #40-30',
      fechaNacimiento: '1988-12-05',
      fechaIngreso: '2018-06-20',
      estadoCivil: 'Casado',
      activo: false,
      motivoInactividad: 'Traslado a otra ciudad',
      fechaInactividad: '2024-09-15'
    }
  ]);

  const [busqueda, setBusqueda] = useState('');
  const [miembroEditando, setMiembroEditando] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nuevoMiembro, setNuevoMiembro] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    telefono: '',
    email: '',
    direccion: '',
    fechaNacimiento: '',
    fechaBautismo: '',
    fechaIngreso: new Date().toISOString().split('T')[0],
    estadoCivil: 'Soltero'
  });

  const [formularioInactivar, setFormularioInactivar] = useState({
    mostrar: false,
    miembroId: null,
    motivo: '',
    fecha: new Date().toISOString().split('T')[0]
  });

  const handleInputChange = (e, esMiembroNuevo = true) => {
    const { name, value } = e.target;
    if (esMiembroNuevo) {
      setNuevoMiembro(prev => ({ ...prev, [name]: value }));
    } else {
      setMiembroEditando(prev => ({ ...prev, [name]: value }));
    }
  };

  const agregarMiembro = () => {
    if (!nuevoMiembro.nombre || !nuevoMiembro.apellido || !nuevoMiembro.cedula || !nuevoMiembro.telefono || !nuevoMiembro.fechaNacimiento || !nuevoMiembro.fechaBautismo || !nuevoMiembro.direccion) {
      alert('Por favor complete todos los campos requeridos');
      return;
    }
    const nuevoId = Math.max(...miembros.map(m => m.id), ...miembrosInactivos.map(m => m.id), 0) + 1;
    setMiembros([...miembros, { ...nuevoMiembro, id: nuevoId, activo: true }]);
    setNuevoMiembro({
      nombre: '',
      apellido: '',
      cedula: '',
      telefono: '',
      email: '',
      direccion: '',
      fechaNacimiento: '',
      fechaBautismo: '',
      fechaIngreso: new Date().toISOString().split('T')[0],
      estadoCivil: 'Soltero'
    });
    setMostrarFormulario(false);
    setSeccionActual('listado');
  };

  const iniciarEdicion = (miembro) => {
    setMiembroEditando({ ...miembro });
    setSeccionActual('editar');
  };

  const guardarEdicion = () => {
    if (!miembroEditando.nombre || !miembroEditando.apellido || !miembroEditando.cedula || !miembroEditando.telefono || !miembroEditando.fechaNacimiento || !miembroEditando.direccion) {
      alert('Por favor complete todos los campos requeridos');
      return;
    }
    setMiembros(miembros.map(m => m.id === miembroEditando.id ? miembroEditando : m));
    setMiembroEditando(null);
    setSeccionActual('listado');
  };

  const iniciarInactivacion = (miembroId) => {
    setFormularioInactivar({
      mostrar: true,
      miembroId: miembroId,
      motivo: '',
      fecha: new Date().toISOString().split('T')[0]
    });
  };

  const confirmarInactivacion = () => {
    const miembro = miembros.find(m => m.id === formularioInactivar.miembroId);
    if (miembro) {
      const miembroInactivo = {
        ...miembro,
        activo: false,
        motivoInactividad: formularioInactivar.motivo,
        fechaInactividad: formularioInactivar.fecha
      };
      setMiembrosInactivos([...miembrosInactivos, miembroInactivo]);
      setMiembros(miembros.filter(m => m.id !== formularioInactivar.miembroId));
    }
    setFormularioInactivar({ mostrar: false, miembroId: null, motivo: '', fecha: '' });
  };

  const reactivarMiembro = (miembroId) => {
    const miembro = miembrosInactivos.find(m => m.id === miembroId);
    if (miembro) {
      const { motivoInactividad, fechaInactividad, ...miembroActivo } = miembro;
      setMiembros([...miembros, { ...miembroActivo, activo: true }]);
      setMiembrosInactivos(miembrosInactivos.filter(m => m.id !== miembroId));
    }
  };

  const miembrosFiltrados = miembros.filter(m =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    m.apellido.toLowerCase().includes(busqueda.toLowerCase()) ||
    m.cedula.includes(busqueda)
  );

  const miembrosInactivosFiltrados = miembrosInactivos.filter(m =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    m.apellido.toLowerCase().includes(busqueda.toLowerCase()) ||
    m.cedula.includes(busqueda)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <Church className="w-10 h-10" />
          <div>
            <h1 className="text-3xl font-bold">Iglesia Ríos de Gracia</h1>
            <p className="text-blue-100 text-sm">Sistema de Gestión de Membresía</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex gap-2 p-4">
              <button
                onClick={() => { setSeccionActual('listado'); setMostrarFormulario(false); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                  seccionActual === 'listado' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Users className="w-5 h-5" />
                Miembros Activos
              </button>
              <button
                onClick={() => { setSeccionActual('nuevo'); setMostrarFormulario(true); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                  seccionActual === 'nuevo' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <UserPlus className="w-5 h-5" />
                Nuevo Miembro
              </button>
              <button
                onClick={() => { setSeccionActual('inactivos'); setMostrarFormulario(false); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                  seccionActual === 'inactivos' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Archive className="w-5 h-5" />
                Miembros Inactivos
              </button>
            </nav>
          </div>

          <div className="p-6">
            {seccionActual === 'listado' && (
              <div>
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Buscar por nombre, apellido o cédula..."
                      value={busqueda}
                      onChange={(e) => setBusqueda(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
                  <p className="text-blue-900 font-semibold">Total de miembros activos: {miembrosFiltrados.length}</p>
                </div>

                <div className="space-y-4">
                  {miembrosFiltrados.map(miembro => (
                    <div key={miembro.id} className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {miembro.nombre} {miembro.apellido}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">Cédula:</span> {miembro.cedula}
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              {miembro.telefono}
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              {miembro.email || 'No registrado'}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {miembro.direccion}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span className="font-semibold">Nacimiento:</span> {new Date(miembro.fechaNacimiento).toLocaleDateString('es-CO')}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span className="font-semibold">Ingreso:</span> {new Date(miembro.fechaIngreso).toLocaleDateString('es-CO')}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">Estado Civil:</span> {miembro.estadoCivil}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => iniciarEdicion(miembro)}
                            className="p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                            title="Editar"
                          >
                            <Edit2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => iniciarInactivacion(miembro.id)}
                            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                            title="Inactivar"
                          >
                            <Archive className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {miembrosFiltrados.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">No se encontraron miembros activos</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {seccionActual === 'nuevo' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Registrar Nuevo Miembro</h2>
                <div className="space-y-6">
                  <FormularioCampos miembro={nuevoMiembro} onChange={handleInputChange} esNuevo={true} />
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={agregarMiembro}
                      className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Registrar Miembro
                    </button>
                    <button
                      onClick={() => setSeccionActual('listado')}
                      className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}

            {seccionActual === 'editar' && miembroEditando && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Editar Miembro</h2>
                <div className="space-y-6">
                  <FormularioCampos miembro={miembroEditando} onChange={handleInputChange} esNuevo={false} />
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={guardarEdicion}
                      className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                      Guardar Cambios
                    </button>
                    <button
                      onClick={() => { setMiembroEditando(null); setSeccionActual('listado'); }}
                      className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}

            {seccionActual === 'inactivos' && (
              <div>
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Buscar por nombre, apellido o cédula..."
                      value={busqueda}
                      onChange={(e) => setBusqueda(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 border-l-4 border-gray-600 p-4 mb-6">
                  <p className="text-gray-900 font-semibold">Total de miembros inactivos: {miembrosInactivosFiltrados.length}</p>
                </div>

                <div className="space-y-4">
                  {miembrosInactivosFiltrados.map(miembro => (
                    <div key={miembro.id} className="bg-gray-50 rounded-lg p-5 border border-gray-300">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {miembro.nombre} {miembro.apellido}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">Cédula:</span> {miembro.cedula}
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              {miembro.telefono}
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              {miembro.email || 'No registrado'}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {miembro.direccion}
                            </div>
                          </div>
                          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                            <p className="text-red-900 font-semibold mb-1">Motivo de inactividad:</p>
                            <p className="text-red-700">{miembro.motivoInactividad}</p>
                            <p className="text-red-600 text-sm mt-2">
                              Fecha: {new Date(miembro.fechaInactividad).toLocaleDateString('es-CO')}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => reactivarMiembro(miembro.id)}
                          className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
                        >
                          Reactivar
                        </button>
                      </div>
                    </div>
                  ))}
                  {miembrosInactivosFiltrados.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      <Archive className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">No hay miembros inactivos</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {formularioInactivar.mostrar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Inactivar Miembro</h3>
              <button
                onClick={() => setFormularioInactivar({ mostrar: false, miembroId: null, motivo: '', fecha: '' })}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Motivo *</label>
                <textarea
                  value={formularioInactivar.motivo}
                  onChange={(e) => setFormularioInactivar(prev => ({ ...prev, motivo: e.target.value }))}
                  rows="3"
                  placeholder="Ej: Traslado a otra ciudad, cambio de congregación..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Inactividad *</label>
                <input
                  type="date"
                  value={formularioInactivar.fecha}
                  onChange={(e) => setFormularioInactivar(prev => ({ ...prev, fecha: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={confirmarInactivacion}
                  disabled={!formularioInactivar.motivo || !formularioInactivar.fecha}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Confirmar
                </button>
                <button
                  onClick={() => setFormularioInactivar({ mostrar: false, miembroId: null, motivo: '', fecha: '' })}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}