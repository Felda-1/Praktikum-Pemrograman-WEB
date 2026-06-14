import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Search } from 'lucide-react';

const SUGGESTIONS = [
  "Jl. Asia Afrika, Bandung",
  "Jl. Braga, Bandung",
  "Jl. Ir. H. Juanda (Dago), Bandung",
  "Jl. Merdeka, Bandung",
  "Pasar Baleendah, Bandung",
  "RSUD Al-Ihsan, Baleendah",
  "Stasiun Bandung (Pintu Utara)",
  "Stasiun Bandung (Pintu Selatan)",
  "Terminal Leuwipanjang",
  "Terminal Cicaheum",
  "Kawasan Pertokoan King's",
  "Kawasan Alun-alun Bandung",
  "Jl. Gatot Subroto (TSM Area)",
  "Jl. Sukajadi (PVJ Area)",
  "Kawasan Pendidikan Jatinangor",
  "Pintu Tol Soreang",
  "Jl. Raya Soreang-Banjaran"
];

const LocationSuggest = ({ value, onChange, placeholder }) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    onChange(val);

    if (val.length > 1) {
      const filtered = SUGGESTIONS.filter(item => 
        item.toLowerCase().includes(val.toLowerCase())
      ).slice(0, 5); // Limit to top 5 suggestions
      setSuggestions(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
    setSelectedIndex(-1);
  };

  const selectSuggestion = (suggestion) => {
    setInputValue(suggestion);
    onChange(suggestion);
    setShowDropdown(false);
  };

  const handleKeyDown = (e) => {
    if (!showDropdown) return;

    if (e.key === 'ArrowDown') {
      setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0) {
        selectSuggestion(suggestions[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setShowDropdown(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
          <MapPin size={18} />
        </div>
        <input
          type="text"
          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition bg-slate-50 text-slate-900 font-medium"
          placeholder={placeholder || "Ketik lokasi kejadian..."}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => inputValue.length > 1 && setShowDropdown(true)}
        />
      </div>

      {showDropdown && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
          <div className="p-2 border-b border-slate-50 bg-slate-50/50">
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">Saran Lokasi</span>
          </div>
          {suggestions.map((item, index) => (
            <div
              key={index}
              onClick={() => selectSuggestion(item)}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
                index === selectedIndex ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-slate-50 text-slate-600'
              }`}
            >
              <Search size={14} className={index === selectedIndex ? 'text-indigo-400' : 'text-slate-300'} />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSuggest;
