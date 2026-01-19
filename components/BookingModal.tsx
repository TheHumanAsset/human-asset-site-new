
import React, { useState } from 'react';
import { Service, SubService, Duration } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, service }) => {
  const [selectedSub, setSelectedSub] = useState<SubService | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<Duration | null>(null);
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    paymentProof: null as File | null
  });

  if (!isOpen) return null;

  /**
   * INSTRUCTIONS FOR USER:
   * Replace the placeholder URLs below with your actual Google Calendar Appointment Schedule links
   * created for each specific duration.
   */
  const CALENDAR_LINKS: Record<number, string> = {
    20: "https://calendar.app.google/xVv8SmVozVrXHyRdA", 
    40: "https://calendar.app.google/xVv8SmVozVrXHyRdA", 
    60: "https://calendar.app.google/xVv8SmVozVrXHyRdA"  
  };

  const currentCalendarLink = selectedDuration ? CALENDAR_LINKS[selectedDuration] : CALENDAR_LINKS[60];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, paymentProof: e.target.files[0] });
    }
  };

  const handleBooking = () => {
    alert(
      `Booking Submission Received!\n\n` +
      `Service: ${service.title}\n` +
      `Slot Duration: ${selectedDuration}m\n\n` +
      `Next Step: We will verify your payment. Once confirmed, your appointment will be finalized via Google Calendar.`
    );
    onClose();
  };

  const isFormValid = formData.fullName && formData.email && formData.phone && formData.paymentProof;
  const lastStep = service.subServices ? 3 : 2;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-[2rem] w-full max-w-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 my-8">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-xl font-bold text-slate-800">{service.title}</h2>
            <div className="flex gap-1 mt-1">
              {[...Array(lastStep)].map((_, i) => (
                <div key={i} className={`h-1.5 w-8 rounded-full transition-all ${step > i ? 'bg-indigo-600' : 'bg-slate-100'}`} />
              ))}
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <i className="fas fa-times text-slate-400 text-lg"></i>
          </button>
        </div>

        <div className="p-8">
          {step === 1 && service.subServices && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Select Area of Interest</label>
              <div className="grid gap-3">
                {service.subServices.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedSub(sub)}
                    className={`flex items-center p-5 rounded-2xl border-2 transition-all text-left group ${
                      selectedSub?.id === sub.id 
                        ? 'border-indigo-600 bg-indigo-50/50 shadow-sm' 
                        : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mr-4 flex items-center justify-center transition-colors ${
                      selectedSub?.id === sub.id ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300'
                    }`}>
                      {selectedSub?.id === sub.id && <i className="fas fa-check text-[10px] text-white"></i>}
                    </div>
                    <span className={`font-bold transition-colors ${selectedSub?.id === sub.id ? 'text-indigo-900' : 'text-slate-600'}`}>
                      {sub.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {((step === 1 && !service.subServices) || (step === 2 && service.subServices)) && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Choose Duration</label>
                <div className="flex gap-3">
                  {service.durations.map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDuration(d)}
                      className={`flex-1 p-4 rounded-2xl border-2 transition-all text-center ${
                        selectedDuration === d ? 'border-indigo-600 bg-indigo-50 shadow-sm' : 'border-slate-100 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`text-2xl font-black ${selectedDuration === d ? 'text-indigo-600' : 'text-slate-400'}`}>{d}</div>
                      <div className="text-[10px] font-bold uppercase text-slate-400">Minutes</div>
                    </button>
                  ))}
                </div>
              </div>

              {selectedDuration && (
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Available Slots ({selectedDuration}m)</label>
                    <span className="text-[10px] text-indigo-500 font-medium italic">Live Schedule</span>
                  </div>
                  <div className="relative border border-slate-200 rounded-3xl overflow-hidden h-[320px] shadow-inner bg-slate-50">
                    <iframe 
                      src={currentCalendarLink} 
                      style={{ border: 0 }} 
                      width="100%" 
                      height="100%" 
                      frameBorder="0" 
                      scrolling="no"
                      title="Consultancy Availability"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === lastStep && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <div className="grid gap-3">
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium text-slate-700"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
                <input 
                  type="email" 
                  placeholder="Email for Meeting Invite" 
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium text-slate-700"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium text-slate-700"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="p-6 bg-slate-900 rounded-[1.5rem] text-white space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <h4 className="font-bold text-indigo-400 uppercase text-xs tracking-widest">Payment Info</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-white/40 uppercase font-bold mb-1">Mobile Transfer</p>
                    <p className="text-sm font-mono">+1 (555) 012-3456</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase font-bold mb-1">IBAN Number</p>
                    <p className="text-sm font-mono truncate">BH76 1234 5678...</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block px-1">Upload Payment Screenshot</label>
                <div className="relative group">
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all ${
                    formData.paymentProof 
                      ? 'border-emerald-500 bg-emerald-50/30 text-emerald-700' 
                      : 'border-slate-200 group-hover:border-indigo-300 bg-slate-50/50 text-slate-400'
                  }`}>
                    <i className={`fas ${formData.paymentProof ? 'fa-check-circle' : 'fa-cloud-arrow-up'} text-2xl mb-2`}></i>
                    <p className="text-sm font-bold truncate px-4">
                      {formData.paymentProof ? formData.paymentProof.name : 'Select screenshot file'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-slate-50/80 border-t border-slate-100 flex justify-between items-center gap-4">
          {step > 1 ? (
            <button 
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 font-bold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Previous
            </button>
          ) : <div />}
          <button
            disabled={
              (step === 1 && service.subServices && !selectedSub) ||
              ((step === 1 && !service.subServices) || (step === 2 && service.subServices) ? !selectedDuration : false) ||
              (step === lastStep && !isFormValid)
            }
            onClick={() => {
              if (step < lastStep) setStep(step + 1);
              else handleBooking();
            }}
            className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 disabled:opacity-30 disabled:grayscale transition-all shadow-lg shadow-indigo-200"
          >
            {step === lastStep ? 'Confirm & Send' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
