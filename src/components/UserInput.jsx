export default function userInputOnComp({ onChange, userInputOnComp }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            required
            value={userInputOnComp.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type="number"
            required
            value={userInputOnComp.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            required
            value={userInputOnComp.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>Investment duration</label>
          <input
            type="number"
            required
            value={userInputOnComp.duration}
            onChange={(event) =>
              onChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
