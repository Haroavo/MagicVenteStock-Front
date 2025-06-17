import React, { useState } from 'react';
import { User, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/authContext';

const LoginForm = () => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(pseudo, password);
      if (!success) {
        setError('Pseudo ou mot de passe incorrect. Veuillez réessayer.');
      }
    } catch (err) {
      setError('Une erreur est survenue lors de la connexion.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">
        Connexion
      </h2>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="pseudo" className="block text-sm font-medium text-gray-700 mb-2">
              Pseudo
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="pseudo"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="Votre pseudo"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="Votre mot de passe"
                required
                disabled={isLoading}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-amber-800 hover:bg-amber-900 disabled:bg-amber-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] focus:ring-4 focus:ring-amber-300"
        >
          {isLoading ? 'Connexion...' : 'S\'identifier'}
        </button>
      </form>
      
      <div className="mt-6 p-4 bg-amber-50 rounded-xl">
        <p className="text-sm text-amber-800 text-center">
          <strong>Compte de test :</strong><br />
          Pseudo: admin<br />
          Mot de passe: password
        </p>
      </div>
    </div>
  );
};

export default LoginForm;