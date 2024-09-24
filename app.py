from flask import Flask, render_template, request
from calculate_gains import calculate_gains
from calculate_gains_over_time import calculate_gains_over_time
from functions_optional import format_currency

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    amount = float(request.form['amount'])
    period = int(request.form.get('period', 12))  # Default to 12 months if not provided
    gains, total_amount, gain_margin = calculate_gains(amount)
    forecasted_amount = calculate_gains_over_time(amount, period)

    # Format amounts for display
    formatted_gains = format_currency(gains)
    formatted_total = format_currency(total_amount)
    formatted_forecast = format_currency(forecasted_amount)

    return render_template('index.html', 
                           gains=formatted_gains, 
                           total_amount=formatted_total, 
                           forecasted_amount=formatted_forecast,
                           gain_margin=gain_margin)

if __name__ == '__main__':
    app.run(debug=True)
