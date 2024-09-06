import React from 'react';

export default function MainPage() {
  return (
    <div>
      <section style={{ backgroundColor: 'grey' }}>
        <div className="text-center container py-5">
          <h4 className="mt-4 mb-5"><strong>Bestsellers</strong></h4>

          {/* Wrap all cards inside a container with horizontal scroll */}
          <div className="card-container" style={{ overflowX: 'auto', width: '100vw', display: 'flex', gap: '1rem' }}>

            {/* First set of three cards */}
            <div className="card" style={{ flex: '0 0 auto', minWidth: '100px',width:'334px' }}>
            <div class="card">
         
        </div>
            </div>

      

            <div className="card" style={{ flex: '0 0 auto', minWidth: '300px' }}>
              {/* Card content */}
            </div>

            {/* Second set of three cards */}
            <div className="card" style={{ flex: '0 0 auto', minWidth: '300px' }}>
              {/* Card content */}
            </div>

            <div className="card" style={{ flex: '0 0 auto', minWidth: '300px' }}>
              {/* Card content */}
            </div>

            <div className="card" style={{ flex: '0 0 auto', minWidth: '300px' }}>
              {/* Card content */}
            </div>

            {/* Add more sets of three cards as needed */}
          </div>

        </div>
      </section>
    </div>
  );
}
