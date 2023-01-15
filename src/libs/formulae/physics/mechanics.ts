/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of mechanics formulae
@Date: 2023/01/05
@TODO:
o	Power
o	Power-Velocity
o	Angular Velocity
o	Angular Acceleration
o	Equations of Rotation
o	Torque
o	Second Law of Rotation
o	Moment of Inertia
o	Rotational Work
o	Rotational Power
o	Rotational Kinetic Energy
o	Angular Momentum
o	Angular Impulse
o	Angular Impulse & Momentum
o	Universal Gravitation
o	Gravitational Field
o	Gravitational Potential Energy
o	Gravitational Potential
o	Orbital Speed
o	Escape Speed
o	Hooke’s Law
o	Spring Potential Energy
o	Simple Harmonic Oscillator 
o	Simple Pendulum
o	Frequency
o	Angular Frequency
o	Density
o	Pressure
o	Pressure in a Fluid
o	Buoyancy
o	Mass Flow Rate
o	Volume Flow Rate
o	Mass Continuity
o	Volume Continuity
o	Bernoulli’s Equation
o	Dynamic Viscosity
o	Kinematic Viscosity
o	Drag
o	Mach Number
o	Reynolds Number
o	Froude Number
o	Young’s Modulus
o	Shear Modulus
o	Bulk Modulus
o	Surface Tension
*/

class Mechanics {
    //velocity equation
    /*
      @param: deltaX - Change in Position
      @param: deltaT - Change in Time
      */
    velocity(deltaX:number, deltaT:number) {
      const avV = deltaX / deltaT;
      return avV.toFixed(3);
    }
  
    //acceleration equation
    /*
    @param: deltaV - Change in Velocity
    @param: deltaT - Change in Time
    */
    acceleration(deltaV:number, deltaT:number) {
      const avA = deltaV / deltaT;
      return avA.toFixed(3);
    }
    //equations of motion
    //1. velocity equation
    //2. displacement equation
    //3. velocity^2 equation
    //4. average velocity equation
    /*
    @param: v - velocity
    @param: v0 - initial velocity
    @param: a - acceleration
    @param: t - time
    @param: d0 - initial position
    @param: d - displacement
    */
  
    equationsOfMotion() {
      return {
        velocityEM: function (v0:number, a:number, t:number) {
          const v = v0 + a * t;
          return v.toFixed(3);
        },
        displacement: function (d0:number, v0:number, t:number, a:number) {
          const d = d0 + v0 * t + 0.5 * (a * t) ** 2;
          return d.toFixed(3);
        },
        velocitySquared: function (v0:number, a:number, d:number, d0:number) {
          const sqrtV = Math.sqrt(v0 ** 2 + 2 * a * (d - d0));
          const vSquared = sqrtV ** 2;
          return vSquared.toFixed(3);
        },
        averageVelocity: function (v0:number, v:number) {
          const av = 0.5 * (v + v0);
          return av.toFixed(3);
        },
      };
    }
    //net force equations
    /*
    @param: m - mass
    @param: a - acceleration
    */
    netForce1(m:number, a:number) {
      const nf = m * a;
      return nf.toFixed(3);
    }
  
    /*
    @param: deltaP - Change in Momentum
    @param: deltaT - Change in Time
    */
    netForce2(deltaP:number, deltaT:number) {
      const nf = deltaP / deltaT;
      return nf.toFixed(3);
    }
  
    //weight equation
    /*
    @param: m - mass
    @param: g - gravity
    */
    weight(m:number, g:number) {
      const w = m * g;
      return w.toFixed(3);
    }
  
    //dry friction equation
    /*
    @param: mu - coefficient of friction
    @param: n - normal force
    */
    dryFriction(mu:number, n:number) {
      const f = mu * n;
      return f.toFixed(3);
    }
  
    //centripetal acceleration equation
    /*
    @param: v - velocity
    @param: r - radius
    */
    centripetalAcceleration(v:number, r:number) {
      const ac = v ** 2 / r;
      return ac.toFixed(3);
    }
  
    //momentum equation
    /*
    @param: m - mass
    @param: v - velocity
    */
    momentum(m:number, v:number) {
      const p = m * v;
      return p.toFixed(3);
    }
  
    //impulse equation
    /*
    @param: f - applied force
    @param: deltaT - change in time
    */
    impulse(f:number, deltaT:number) {
      const deltaP = f * deltaT;
      return deltaP.toFixed(3);
    }
  
    //impulse momentum equation
    /*
    @param: m - mass
    @param: deltaV - change in velocity
    */
    impulseMomentum(m:number, deltaV:number) {
      const im = m * deltaV;
      return im.toFixed(3);
    }
  
    //work equation
    /*
    @param: f - force
    @param: d - displacement
    */
    work(f:number, d:number) {
      const w = f * d;
      return w.toFixed(3);
    }
  
    //work-energy equation
    /*
    @param: KA - initial kinetic energy
    @param: KB - final kinetic energy
    */
    workEnergy(KA:number, KB:number) {
      const wNet = KB - KA;
      return wNet.toFixed(3);
    }
  
    //kinetic energy equation
    /*
    @param: m - mass
    @param: v - velocity
     */
    kineticEnergy(m:number, v:number) {
      const K = 0.5 * (m * v ** 2);
      return K.toFixed(3);
    }
  
    //general potential energy equation
    /*
    @param: f - force
    @param: d - displacement
    */
    generalPotentialEnergy(f:number, d:number) {
      const U = -f * d;
      return U.toFixed(3);
    }
  
    //gravitational potential energy equation
    /*
    @param: m - mass
    @param: g - gravitational field
    @param: h - height
     */
    gravitationalPotentialEnergy(m:number, g:number, h:number) {
      const U = m * g * h;
      return U.toFixed(3);
    }
  
    //efficiency equation
    /*
    @param: eo - energy output
    @param: ei - energy input
    */
    efficiency(eo:number, ei:number) {
      const eta = eo / ei;
      return eta.toFixed(3);
    }
  }

export default Mechanics;